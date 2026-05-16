module.exports = {
  content: [
    './apps/web/**/*.{js,ts,jsx,tsx}',
    './apps/web/pages/**/*.{js,ts,jsx,tsx}',
    './apps/web/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#10b981', // emerald-500
        accent: '#f59e0b', // amber-500
        background: '#f9fafb', // gray-50
        card: '#ffffff',
        text: '#111827', // gray-900
        muted: '#6b7280', // gray-500
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
};