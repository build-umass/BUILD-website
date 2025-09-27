# BUILD Finder Backend

FastAPI backend for the BUILD Finder application.

## Setup

1. Install dependencies:
```bash
pip install -e ".[dev]"
```

2. Start the development server:
```bash
uvicorn app.main:app --reload
```

3. Initialize Alembic (first time only):
```bash
alembic init alembic
alembic revision --autogenerate -m "init"
alembic upgrade head
```

4. Start RQ worker:
```bash
rq worker default --url $REDIS_URL
```

## API Documentation

Visit http://localhost:8000/docs for interactive API documentation.
