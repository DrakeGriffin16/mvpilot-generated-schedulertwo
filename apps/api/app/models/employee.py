from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    # Availability stored as JSON text: e.g., {"Monday": ["morning"], "Tuesday": ["evening"], ...}
    availability = Column(Text, nullable=False)

    def __repr__(self):
        return f"<Employee(id={self.id}, name='{self.name}', availability={self.availability})>"