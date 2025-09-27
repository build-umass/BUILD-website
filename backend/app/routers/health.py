from fastapi import APIRouter
from app.db.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
async def health():
    return HealthResponse(ok=True, service="api")
