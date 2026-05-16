import type { NextPage } from 'next';
import EmployeeForm from '@/components/EmployeeForm';
import ScheduleCalendar from '@/components/ScheduleCalendar';
import { useState } from 'react';

const Home: NextPage = () => {
  const [employees, setEmployees] = useState<Array<any>>([]);
  const [schedule, setSchedule] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleEmployeesUpdate = (newEmployees: Array<any>) => {
    setEmployees(newEmployees);
  };

  const handleGenerateSchedule = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employees }),
      });
      const data = await res.json();
      setSchedule(data.schedule);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Scheduler</h1>
      <EmployeeForm onEmployeesChange={handleEmployeesUpdate} />
      {employees.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleGenerateSchedule}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            {loading ? 'Generating...' : 'Generate Schedule'}
          </button>
        </div>
      )}
      {schedule && (
        <div className="mt-8">
          <ScheduleCalendar schedule={schedule} />
        </div>
      )}
    </div>
  );
};

export default Home;