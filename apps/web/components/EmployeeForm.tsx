import React, { useState } from 'react';

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
type Availability = Record<Day, { morning: boolean; evening: boolean }>;

interface EmployeeFormProps {
  onSubmit: (data: { name: string; availability: Availability }) => void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [availability, setAvailability] = useState<Availability>({
    Monday: { morning: false, evening: false },
    Tuesday: { morning: false, evening: false },
    Wednesday: { morning: false, evening: false },
    Thursday: { morning: false, evening: false },
    Friday: { morning: false, evening: false },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleToggle = (day: Day, shift: 'morning' | 'evening') => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [shift]: !prev[day][shift],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, availability });
    // reset form
    setName('');
    setAvailability({
      Monday: { morning: false, evening: false },
      Tuesday: { morning: false, evening: false },
      Wednesday: { morning: false, evening: false },
      Thursday: { morning: false, evening: false },
      Friday: { morning: false, evening: false },
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-xl'>
      <h2 className='text-xl font-bold text-center'>Add Employee</h2>

      <div>
        <label htmlFor='name' className='block text-sm font-medium mb-1'>
          Employee Name
        </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          placeholder='Enter employee name'
          required
        />
      </div>

      <fieldset className='border p-4'>
        <legend className='text-lg font-semibold mb-2'>Availability (Monday‑Friday)</legend>
        <div className='grid grid-cols-3 gap-4'>
          <div className='text-center font-medium'>Shift</div>
          <div className='text-center font-medium'>Morning</div>
          <div className='text-center font-medium'>Evening</div>
          {[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ].map(day => (
            <div key={day} className='border-t pt-4'>
              <div className='text-left font-medium'>{day}</div>
              <label className='flex items-center justify-center'>
                <input
                  type='checkbox'
                  checked={availability[day as Day].morning}
                  onChange={() => handleToggle(day as Day, 'morning')}
                  className='h-4 w-4 text-indigo-600'
                />
              </label>
              <label className='flex items-center justify-center'>
                <input
                  type='checkbox'
                  checked={availability[day as Day].evening}
                  onChange={() => handleToggle(day as Day, 'evening')}
                  className='h-4 w-4 text-indigo-600'
                />
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <button
        type='submit'
        className='w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50'
        disabled={name.trim() === ''}
      >
        Save Employee
      </button>
    </form>
  );
};