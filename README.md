# BUILD Finder

A monorepo for finding and connecting with builders, featuring a Next.js frontend and FastAPI backend.

## Architecture

- **Frontend**: Next.js with TypeScript, Tailwind CSS, TanStack Query, Zustand, and Supabase integration
- **Backend**: FastAPI with SQLAlchemy 2.x, Alembic, Redis/RQ, and async PostgreSQL
- **Database**: PostgreSQL (local via Docker or Supabase hosted)
- **Queue**: Redis with RQ for background jobs
- **Deployment**: Docker Compose for local development

## Quick Start

### Prerequisites

- Node.js 18+
- Python 3.12+
- Docker and Docker Compose

### 1. Start Infrastructure Services

```bash
# Start PostgreSQL and Redis
docker compose up -d postgres redis
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
pip install -e ".[dev]"

# Copy environment file
cp .env.example .env

# Start the API server
uvicorn app.main:app --reload
```

### 3. Frontend Setup

```bash
# Install dependencies (from root)
npm install

# Start the frontend
npm run dev -w frontend
```

### 4. Start Background Workers (Optional)

```bash
cd backend
rq worker default --url redis://localhost:6379/0
```

## Development Commands

### Root Level

```bash
npm run dev          # Start frontend
npm run lint         # Lint frontend
npm run format       # Format frontend code
```

### Backend

```bash
uvicorn app.main:app --reload                    # Start API server
rq worker default --url $REDIS_URL              # Start background worker
alembic upgrade head                             # Run database migrations
alembic revision --autogenerate -m "message"    # Create new migration
pytest                                           # Run tests
```

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

## Environment Configuration

### Local Development

Use the provided `.env.example` files. The default configuration uses:
- Local PostgreSQL via Docker
- Local Redis via Docker
- Frontend connects to local backend

### Supabase Integration

To use hosted Supabase instead of local PostgreSQL:

1. Update `backend/.env`:
   ```
   DATABASE_URL=postgresql+asyncpg://postgres:[password]@[host]:5432/postgres
   ```

2. Update `frontend/.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon_key]
   ```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /docs` - Interactive API documentation (Swagger UI)

## Health Checks

- Backend: `http://localhost:8000/health`
- Frontend proxy: `http://localhost:3000/api/health`

## Database Migrations

```bash
cd backend

# Create a new migration
alembic revision --autogenerate -m "description"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```

## Testing

```bash
# Backend tests
cd backend
pytest

# Frontend tests (when configured)
npm run test -w frontend
```

## Docker Development

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

## Project Structure

```
build-finder/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   └── lib/             # Utilities and configurations
├── backend/                  # FastAPI application
│   ├── app/
│   │   ├── db/              # Database models and schemas
│   │   ├── routers/         # API routes
│   │   ├── services/        # Business logic
│   │   ├── workers/         # Background jobs
│   │   └── security/        # Authentication
│   └── tests/               # Test files
├── docker-compose.yml       # Docker services
└── package.json            # Workspace configuration
```

## Technologies

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand
- Zod
- Axios
- Supabase Client

### Backend
- FastAPI
- SQLAlchemy 2.x
- Alembic
- Redis + RQ
- Pydantic
- HTTPX
- Beautiful Soup 4
- Tenacity

### DevOps
- Docker & Docker Compose
- ESLint & Prettier
- Ruff & Black
- MyPy
- Pytest