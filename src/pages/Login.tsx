import React, { useState } from 'react';
import { User, Lock, Mail, UserPlus } from 'lucide-react';

const Login = () => {
  // State for toggling between login and create account form
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // State for login form inputs
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // State for create account form inputs
  const [createAccountData, setCreateAccountData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
  };

  // Handle create account form submission
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // Set login form with the newly created account credentials
    setLoginData({
      username: createAccountData.username,
      password: createAccountData.password,
    });
    // Hide the create account form
    setShowCreateAccount(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap">
            {/* Login Form */}
            <div className={`w-full ${showCreateAccount ? 'md:w-1/2' : 'md:w-2/3 mx-auto'}`}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Username Input */}
                  <div>
                    <label className="block text-gray-700 mb-2">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Sign In
                  </button>
                </form>

                {/* Show Create Account Button if not already visible */}
                {!showCreateAccount && (
                  <button
                    onClick={() => setShowCreateAccount(true)}
                    className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition flex items-center justify-center"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Create Account
                  </button>
                )}
              </div>
            </div>

            {/* Create Account Form */}
            {showCreateAccount && (
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                  <form onSubmit={handleCreateAccount} className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={createAccountData.name}
                        onChange={(e) => setCreateAccountData({ ...createAccountData, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={createAccountData.email}
                          onChange={(e) => setCreateAccountData({ ...createAccountData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Username Input */}
                    <div>
                      <label className="block text-gray-700 mb-2">Username</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={createAccountData.username}
                          onChange={(e) => setCreateAccountData({ ...createAccountData, username: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="password"
                          value={createAccountData.password}
                          onChange={(e) => setCreateAccountData({ ...createAccountData, password: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Create Account Button */}
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
