from typing import Dict, Any


class ScoringService:
    def calculate_lead_score(self, lead_data: Dict[str, Any]) -> int:
        """Calculate a lead score based on various factors."""
        score = 0
        
        # Email domain scoring
        email = lead_data.get("email", "")
        if email:
            domain = email.split("@")[1] if "@" in email else ""
            if domain in ["gmail.com", "yahoo.com", "hotmail.com"]:
                score -= 10
            elif domain.endswith(".edu"):
                score += 5
            else:
                score += 10
        
        # Company scoring
        company = lead_data.get("company", "")
        if company:
            if len(company) > 10:
                score += 5
            if "inc" in company.lower() or "corp" in company.lower():
                score += 5
        
        # Title scoring
        title = lead_data.get("title", "").lower()
        if any(keyword in title for keyword in ["ceo", "founder", "president"]):
            score += 20
        elif any(keyword in title for keyword in ["director", "manager", "lead"]):
            score += 10
        elif any(keyword in title for keyword in ["engineer", "developer", "architect"]):
            score += 15
        
        return max(0, min(100, score))
