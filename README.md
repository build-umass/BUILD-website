# BUILD UMass Website

The official website for BUILD UMass - a student organization that builds software for nonprofits and local businesses.

## Features

- **Application System**: Software Developer and Product Manager application forms
- **Waitlist**: Email signup for interested members when applications are closed
- **Admin Dashboard**: Password-protected dashboard for managing applications
  - Toggle applications open/closed for each role
  - View all waitlist members, SD applications, and PM applications
  - Delete individual records or bulk delete all records
  - View if applicants have previously applied

## Tech Stack

- **Frontend**: Next.js 15 (Pages Router), TypeScript, Tailwind CSS
- **Database**: PostgreSQL via Prisma Cloud
- **ORM**: Prisma
- **Authentication**: NextAuth.js (Credentials provider)

## Project Structure

```
BUILD-website/
├── frontend/                    # Next.js application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── apply/           # Application-related components
│   │   │   └── ui/              # Shared UI components
│   │   ├── lib/                 # Utilities and configurations
│   │   └── pages/               # Next.js pages
│   │       ├── api/             # API routes
│   │       │   ├── admin/       # Admin endpoints (data, status, delete)
│   │       │   ├── applications/# Application submission endpoints
│   │       │   ├── auth/        # NextAuth configuration
│   │       │   └── waitlist/    # Waitlist endpoints
│   │       ├── apply/           # Application form pages
│   │       └── admin.tsx        # Admin dashboard
├── backend/
│   └── app/
│       └── db/
│           ├── prisma.ts        # Prisma client
│           └── schemas/
│               └── schema.prisma # Database schema
├── .env                         # Environment variables
└── package.json                 # Workspace configuration
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database - Prisma Cloud PostgreSQL connection string
DATABASE_URL="postgres://[user]:[password]@db.prisma.io:5432/postgres?sslmode=require"

# Admin password for dashboard access
ADMIN_PASSWORD=your-secure-password

# NextAuth secret - generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your-generated-secret
```

### 3. Generate Prisma Client

```bash
npm run prisma:generate
```

### 4. Push Database Schema

```bash
npm run prisma:push
```

### 5. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Development Commands

```bash
npm run dev              # Start development server
npm run lint             # Run ESLint
npm run format           # Format code with Prettier

# Prisma commands
npm run prisma:generate  # Generate Prisma client
npm run prisma:push      # Push schema to database
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio (database GUI)
```

## Database Schema

### Tables

| Table | Description |
|-------|-------------|
| `waitlist_members` | Email signups for the waitlist |
| `software_developers` | Software Developer applications |
| `product_managers` | Product Manager applications |
| `application_status` | Controls if applications are open/closed |
| `admins` | Admin users (for future use) |

## API Routes

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/applications/status` | Get application open/closed status |
| POST | `/api/applications/software-developer` | Submit SD application |
| POST | `/api/applications/product-manager` | Submit PM application |
| POST | `/api/waitlist/join` | Join the waitlist |

### Protected Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/data` | Fetch all applications and waitlist |
| GET | `/api/admin/status` | Get application status |
| POST | `/api/admin/status` | Toggle application status |
| DELETE | `/api/admin/delete` | Delete individual or all records |

## Admin Dashboard

Access the admin dashboard at `/admin`. Features include:

1. **Application Status Toggles**: Open/close applications for SD and PM roles
2. **Waitlist Tab**: View all waitlist members with delete options
3. **Software Developers Tab**: View full SD applications with:
   - Contact info and resume links
   - Essay responses
   - Previous application indicator
   - Individual delete option
4. **Product Managers Tab**: View full PM applications with similar features
5. **Bulk Delete**: Delete all records in any category

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (Prisma Cloud) |
| `ADMIN_PASSWORD` | Password for admin dashboard access |
| `NEXTAUTH_SECRET` | Secret for NextAuth session encryption |

## Styling

The website uses BUILD UMass brand guidelines:
- **Primary Font**: Montserrat
- **Secondary Font**: Source Sans Pro
- **Primary Color**: BUILD Red (`#dc2626`)
- **Design**: Clean, modern interface with Tailwind CSS

## Deployment

For production deployment:

1. Set environment variables on your hosting platform
2. Ensure `DATABASE_URL` points to your production database
3. Generate a secure `NEXTAUTH_SECRET`
4. Build the application: `npm run build -w frontend`
5. Start the production server: `npm run start -w frontend`
