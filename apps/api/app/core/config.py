from pydantic import BaseSettings

class Settings(BaseSettings):
    """Application configuration loaded from environment variables."""
    SUPABASE_URL: str
    SUPABASE_KEY: str
    NVIDIA_API_KEY: str

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

def get_settings() -> Settings:
    """Return a cached settings instance."""
    return Settings()