import httpx
from typing import Dict, Any, Optional


class BaseScraper:
    def __init__(self):
        self.client = httpx.AsyncClient(
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
        )

    async def scrape(self, url: str) -> Optional[Dict[str, Any]]:
        """Base scraping method to be overridden."""
        try:
            response = await self.client.get(url)
            response.raise_for_status()
            return {"url": url, "status": "success", "content": response.text[:1000]}
        except Exception as e:
            return {"url": url, "status": "error", "error": str(e)}

    async def close(self):
        await self.client.aclose()
