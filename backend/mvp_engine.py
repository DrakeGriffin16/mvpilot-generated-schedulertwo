"""Core MVP planning logic."""

from __future__ import annotations

from typing import Any


DEMO_WORKSPACE: dict[str, Any] = {
    "project": "scheduler two",
    "idea": "build a simple scheduler app to schedule my employees",
    "audience": "operators",
    "record_label": "Work Request",
    "workflow_label": "Operations Queue",
    "metric_label": "Operating Metrics",
    "workflow": [
        "Needs review",
        "Ready to start",
        "In progress",
        "Done"
    ],
    "features": [
        "Capture work request requests with priority, owner, and due date.",
        "Turn each intake into a operations queue workflow with next actions.",
        "Expose operating metrics, queue, and intake summaries through FastAPI."
    ],
    "metrics": [
        {
            "label": "Open items",
            "value": "3",
            "delta": "2 need attention"
        },
        {
            "label": "Response time",
            "value": "14m",
            "delta": "from intake to owner"
        },
        {
            "label": "On track",
            "value": "82%",
            "delta": "target workflow health"
        },
        {
            "label": "Blocked",
            "value": "1",
            "delta": "waiting on outside input"
        }
    ],
    "intake_template": {
        "goal": "Review highest-risk user workflow",
        "segment": "High value",
        "priority": "High",
        "owner": "Sam Rivera"
    },
    "queue": [
        {
            "id": "item-1",
            "title": "Review highest-risk user workflow",
            "segment": "High value",
            "owner": "Sam Rivera",
            "priority": "High",
            "status": "Needs review",
            "due": "today"
        },
        {
            "id": "item-2",
            "title": "Prepare stakeholder-ready pilot data",
            "segment": "At risk",
            "owner": "Taylor Kim",
            "priority": "Normal",
            "status": "Ready to start",
            "due": "tomorrow"
        },
        {
            "id": "item-3",
            "title": "Close the loop on blocked task",
            "segment": "New request",
            "owner": "Morgan Diaz",
            "priority": "Low",
            "status": "In progress",
            "due": "Friday"
        }
    ],
    "agent_team": [
        {
            "name": "Strategist Agent",
            "role": "Scope and success metric",
            "status": "Ready",
            "output": "Narrows operations queue to one demo path for operators."
        },
        {
            "name": "Research Agent",
            "role": "Context and constraints",
            "status": "Ready",
            "output": "Tracks source warnings, domain rules, and work request requirements."
        },
        {
            "name": "Builder Agent",
            "role": "App and API",
            "status": "Ready",
            "output": "Generates the React workspace, FastAPI routes, and database-ready schema."
        },
        {
            "name": "QA Agent",
            "role": "Risk checks",
            "status": "Ready",
            "output": "Checks queue states, blocked work, and smoke-test coverage before demo."
        },
        {
            "name": "Demo Agent",
            "role": "Stakeholder narrative",
            "status": "Ready",
            "output": "Packages the walkthrough, API payload, and next implementation steps."
        }
    ],
    "next_actions": [
        "Assign an owner and deadline to the newest work request.",
        "Move one item from needs review to ready to start.",
        "Review the API response with the frontend before adding persistence."
    ],
    "implementation_steps": [
        "Initialize Git repository and configure GitHub connection.",
        "Create frontend Next.js app with TypeScript and Tailwind CSS.",
        "Create backend FastAPI project with Python 3.12, Uvicorn, and Supabase client.",
        "Define Supabase schema for employees and shifts; add .env.example with placeholder variables.",
        "Implement employee CRUD endpoints (GET/POST) in backend.",
        "Implement schedule generation endpoint that calls NVIDIA Nemotron for reasoning and returns a weekly schedule.",
        "Build frontend EmployeeForm component to collect employee name and availability (Mon-Fri, morning/evening).",
        "Build frontend ScheduleCalendar component to display weekly schedule in a grid view."
    ]
}


def build_demo_workspace() -> dict[str, Any]:
    return DEMO_WORKSPACE


def build_demo_plan(idea: str, features: list[str]) -> dict[str, Any]:
    return {
        'idea': idea,
        'features': features,
        'audience': DEMO_WORKSPACE['audience'],
        'metrics': DEMO_WORKSPACE['metrics'],
        'agent_team': DEMO_WORKSPACE['agent_team'],
        'queue': DEMO_WORKSPACE['queue'],
        'next_actions': DEMO_WORKSPACE['next_actions'],
    }


def summarize_intake(payload: dict[str, Any]) -> dict[str, Any]:
    goal = str(payload.get('user_goal') or '').strip()
    urgency = str(payload.get('urgency') or 'normal').strip().lower()
    segment = str(payload.get('segment') or DEMO_WORKSPACE['audience']).strip()
    owner = str(payload.get('owner') or DEMO_WORKSPACE['intake_template']['owner']).strip()
    priority = 'high' if urgency in {'urgent', 'high', 'critical'} else 'normal'
    first_action = DEMO_WORKSPACE['next_actions'][0]
    return {
        'summary': goal or "build a simple scheduler app to schedule my employees",
        'priority': priority,
        'segment': segment,
        'owner': owner,
        'status': DEMO_WORKSPACE['workflow'][0],
        'recommended_first_step': first_action,
    }