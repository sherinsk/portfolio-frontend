import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-row item-center justify-center bg-black-100 p-8 mb-50">
      <div className="w-full  max-w-md p-8 pb-10 bg-white shadow-lg rounded-lg md:mt-[80px] mb-[200px] md:mb-[200px]">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="user@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-4 bg-green-700 text-white font-semibold rounded-md shadow-sm"
          >Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
