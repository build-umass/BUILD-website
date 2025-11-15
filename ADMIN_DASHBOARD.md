# Admin Dashboard

This directory contains the admin dashboard implementation for BUILD UMass.

## Features

- **Password-protected access** via NextAuth with 1-hour session timeout
- **Application status toggle** to control whether applications are open/closed
- **Waitlist management** - View all waitlist members and their emails
- **Application review** - When applications are open, view:
  - Software Developer applications with full details
  - Product Manager applications with full details

## Setup

### 1. Environment Variables

Create a `frontend/.env.local` file with the following:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key-here
ADMIN_PASSWORD=your-slack-password-here
DATABASE_URL="file:../backend/app/db/dev.db"
```

**Important**: Replace `your-slack-password-here` with the password established in Slack.

To generate a secure `NEXTAUTH_SECRET`, run:
```bash
openssl rand -base64 32
```

### 2. Install Dependencies

Dependencies are already installed if you've run `npm install` at the root level.

### 3. Generate Prisma Client

Generate the Prisma client from the backend schema:

```bash
npx prisma generate --schema=backend/app/db/schemas/schema.prisma
```

## Usage

### Accessing the Dashboard

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/admin`

3. Enter the admin password when prompted

4. You'll be logged in for 1 hour

### Features Overview

#### Application Status Toggle
- Switch between "OPEN" and "CLOSED" states
- When closed: Only waitlist is visible
- When open: All applications (SD & PM) are visible

#### Waitlist Tab
- Always visible regardless of application status
- Shows name, email, and join date for all waitlist members

#### Software Developer Applications Tab
- Only visible when applications are OPEN
- Shows full application details including:
  - Basic info (name, email, major, graduating year)
  - Contact links (GitHub, LinkedIn, resume)
  - Essay responses
  - Applied date

#### Product Manager Applications Tab
- Only visible when applications are OPEN
- Shows full application details including:
  - Basic info (name, email, major, graduating year)
  - Contact links (LinkedIn, resume)
  - Essay responses
  - Applied date

## Styling

The dashboard follows the BUILD UMass brand guidelines:
- **Font**: Montserrat (primary) & Source Sans Pro
- **Colors**: BUILD Red (#dc2626) and white
- **Design**: Clean, modern interface with cards and responsive tables

## Security

- Session expires after 1 hour
- Password-protected via NextAuth
- API routes check for authenticated session
- No sensitive data in client-side code

## API Routes

- `/api/auth/[...nextauth]` - NextAuth authentication handler
- `/api/admin/data` - Fetch waitlist and application data (protected)
- `/api/admin/status` - Get/set application open/closed status (protected)

## Technical Stack

- **Framework**: Next.js 15
- **Authentication**: NextAuth.js
- **Database**: Prisma with SQLite
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
