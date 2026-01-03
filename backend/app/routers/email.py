import os
import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, field_validator
from dotenv import load_dotenv
import re

# Load environment variables from .env file
load_dotenv()

# Recipient email from .env
PERSONAL_EMAIL = os.getenv("PERSONAL_EMAIL")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    organization: str = ""
    subject: str
    message: str

    @field_validator('name')
    @classmethod
    def validate_name(cls, v: str) -> str:
        if len(v.strip()) < 2:
            raise ValueError('Name must be at least 2 characters')
        return v.strip()
    
    @field_validator('message')
    @classmethod
    def validate_message(cls, v: str) -> str:
        if len(v.strip()) < 10:
            raise ValueError('Message must be at least 10 characters')
        return v.strip()
    
    @field_validator('email')
    @classmethod
    def validate_email_format(cls, v: str) -> str:
        """Additional email validation"""
        # Check for common disposable email domains (optional)
        disposable_domains = ['tempmail.com', 'throwaway.email', '10minutemail.com']
        domain = v.split('@')[1].lower()
        
        if domain in disposable_domains:
            raise ValueError('Disposable email addresses are not allowed')
        
        # Ensure email has proper format
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, v):
            raise ValueError('Invalid email format')
            
        return v.lower()  # Return normalized email

async def send_email_resend(to_email: str, subject: str, html_body: str, reply_to: str) -> None:
    """Send email using Resend HTTP API."""
    if not all([PERSONAL_EMAIL, RESEND_API_KEY]):
        raise ValueError("Missing required environment variables for sending email.")

    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "from": "BUILD UMass <onboarding@resend.dev>",  # Use Resend's testing domain
        "to": [to_email],
        "subject": subject,
        "html": html_body,
    }
    # Set reply-to if provided
    if reply_to:
        payload["reply_to"] = [reply_to]

    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.post(url, json=payload, headers=headers)
        if resp.status_code >= 400:
            raise HTTPException(status_code=500, detail=f"Resend API error: {resp.text}")


@router.post("/api/send-email", tags=["Email"])
async def send_contact_email(form: ContactForm):
    """Endpoint to handle contact form submissions and send an email via Resend."""
    html_content = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Organization:</strong> {form.organization or 'N/A'}</p>
        <p><strong>Subject:</strong> {form.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>{form.message}</p>
    """

    try:
        await send_email_resend(
            to_email=PERSONAL_EMAIL,  # Your email receives the message
            subject=f"BUILD Website Contact: {form.subject}",
            html_body=html_content,
            reply_to=form.email  # Visitor's email for easy reply
        )
        return {"success": True, "message": "Email sent successfully!"}
    except ValueError as e:
        print(f"Config error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred.")