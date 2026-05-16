# scheduler two Architecture

Original idea: build a simple scheduler app to schedule my employees

## Components

- React frontend in `src/` for the demo workflow.
- FastAPI backend in `backend/` for health, planning, work request intake, and demo data endpoints.
- Postgres schema in `docs/DATABASE_SCHEMA.sql` for the first persistence pass.
- Pytest smoke tests in `tests/` for generated backend logic.

## Demo Domain

- Audience: operators.
- Workflow: Needs review, Ready to start, In progress, Done.
- Metrics: Operating Metrics.

## Generated Subagents

- Strategist Agent scopes the demo and selects the success metric.
- Research Agent turns source context into constraints and warnings.
- Builder Agent produces the frontend/API/database slice.
- QA Agent checks risks, blocked work, and demo readiness.
- Demo Agent packages the walkthrough for stakeholders.

## Stack Decision

Next.js, React, TypeScript, Tailwind CSS, Python 3.12, FastAPI, Uvicorn, Supabase Postgres, pgvector, NVIDIA Nemotron, pytest, npm run build

## Implementation Steps

1. Initialize Git repository and configure GitHub connection.
2. Create frontend Next.js app with TypeScript and Tailwind CSS.
3. Create backend FastAPI project with Python 3.12, Uvicorn, and Supabase client.
4. Define Supabase schema for employees and shifts; add .env.example with placeholder variables.
5. Implement employee CRUD endpoints (GET/POST) in backend.
6. Implement schedule generation endpoint that calls NVIDIA Nemotron for reasoning and returns a weekly schedule.
7. Build frontend EmployeeForm component to collect employee name and availability (Mon-Fri, morning/evening).
8. Build frontend ScheduleCalendar component to display weekly schedule in a grid view.