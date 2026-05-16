import os
from supabase import create_client, Client
from dotenv import load_dotenv
from typing import Generator

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("Supabase URL and KEY must be set in environment variables")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def get_db() -> Generator[Client, None, None]:
    try:
        yield supabase
    finally:
        pass  # No cleanup needed for Supabase client