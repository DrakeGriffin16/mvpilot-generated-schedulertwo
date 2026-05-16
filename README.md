# Employee Scheduler MVP

## Overview

Simple scheduler app to schedule employees. Frontend Next.js with React, TypeScript, Tailwind CSS. Backend FastAPI with Python 3.12, Uvicorn, Supabase Postgres. Uses NVIDIA Nemotron for shift reasoning.

## Features

- Input up to 3 employees with name and availability (Mon-Fri, morning/evening)
- Generate weekly schedule via backend calling NVIDIA Nemotron
- View calendar grid of assigned shifts
- Demo boundary: 3 employees, 5-day week, 2 shift types

## Tech Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Python 3.12, FastAPI, Uvicorn
- Database: Supabase Postgres (pgvector extension)
- AI: NVIDIA Nemotron for schedule generation reasoning
- Testing: pytest (backend), Jest/React Testing Library (frontend)
- Build: npm run build

## Setup

1. Clone repository
2. Install frontend dependencies: `cd apps/web && npm install`
3. Install backend dependencies: `cd ../api && pip install -r requirements.txt`
4. Create `.env` from `.env.example` and fill in:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - NVIDIA_API_KEY
5. Run database migrations (if any) – ensure Supabase schema includes employees and shifts tables.
6. Start backend: `uvicorn apps.api.main:app --reload`
7. Start frontend: `npm run dev` (from apps/web)
8. Visit http://localhost:3000

## Usage

- Fill Employee Form with name and tick boxes for each day/shift.
- Click "Generate Schedule".
- Backend calls NVIDIA Nemotron to reason about optimal assignments.
- Schedule displayed in weekly calendar view.

## NVIDIA Nemotron Usage

The backend schedule generation endpoint (`POST /generate`) sends employee availability constraints to the NVIDIA Nemotron model via its API. The model returns a reasoned shift assignment (e.g., maximizing coverage, respecting preferences). The backend then stores the result in Supabase and returns it to the frontend for display.

## Testing

- Backend: `pytest`
- Frontend: `npm test` (if configured) or run Jest via `npm run test`

## CI

GitHub Actions workflow runs tests on push/pull request.

## License

MIT