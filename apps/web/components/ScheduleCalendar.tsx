import React from 'react';

interface Employee {
  id: string;
  name: string;
}

interface ShiftMap {
  [day: string]: string;
}

interface ScheduleCalendarProps {
  schedule: Array<{
    employee: Employee;
    shifts: ShiftMap;
  }>;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return <p className="text-center text-gray-500">No schedule data available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Employee</th>
            {DAYS.map(day => (
              <th key={day} className="border border-gray-300 px-4 py-2 text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map(item => (
            <tr key={item.employee.id} className="border-t">
              <td className="border border-gray-300 px-4 py-2 font-medium">
                {item.employee.name}
              </td>
              {DAYS.map(day => (
                <td
                  key={day}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {item.shifts[day] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};