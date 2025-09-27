def send_email_job(lead_id: str, template_id: str, step: int = 1):
    """Job to send an email to a lead."""
    # TODO: integrate SendGrid later
    print(f"[JOB] send_email lead={lead_id} template={template_id} step={step}")
    return {"status": "sent", "lead_id": lead_id, "step": step}
