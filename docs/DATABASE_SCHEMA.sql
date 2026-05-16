-- Suggested Postgres schema for scheduler-two
create table if not exists scheduler_two_intakes (
  id uuid primary key default gen_random_uuid(),
  user_goal text not null,
  urgency text not null default 'normal',
  segment text not null default 'general',
  owner_name text,
  due_label text,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists scheduler_two_intakes_status_idx
  on scheduler_two_intakes(status, created_at desc);
create index if not exists scheduler_two_intakes_owner_idx
  on scheduler_two_intakes(owner_name, urgency);