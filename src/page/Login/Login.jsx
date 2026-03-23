import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    login({ name: 'John Doe', email: 'john@example.com' });
    navigate('/');
  };

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
      <p className="text-gray-600 dark:text-gray-400">Login page - coming soon</p>
      <button
        onClick={handleDemoLogin}
        className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
      >
        Demo Login (for testing navbar)
      </button>
    </div>
  );
}
