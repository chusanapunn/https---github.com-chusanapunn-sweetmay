"use client";

import React, { useState } from 'react';
import Link from "next/link";

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    pwd: '',
    confpwd: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.fullName || !formData.userName || !formData.email || !formData.pwd || !formData.confpwd) {
      setError('All fields are required.');
      return;
    }

    if (formData.pwd !== formData.confpwd) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          userName: formData.userName,
          email: formData.email,
          pwd: formData.pwd,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Something went wrong');

      setSuccess('Registration successful! Please log in.');
      setFormData({ fullName: '',userName:'', email: '', pwd: '', confpwd: '' }); // reset input area
    } catch (error) {
      if (error instanceof Error){
        setError(error.message || 'Registration failed.');
      }
    }
  };

  return (
    <div className='p-12 flex items-center justify-center'>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full px-4">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Register Your Account</h1>
        
        <div className="flex mb-4 text-sm">
          <label className="text-gray-700">Already have an account?</label>
          <Link className="pl-2 text-orange-500 hover:underline" href="/login">
            Login
          </Link>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 mb-2">Full Name:</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
            type="text"
            placeholder="Full Name"
          />

          <label className="block text-gray-700 mb-2">User Name:</label>
          <input
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
            type="text"
            placeholder="User Name"
          />

          <label className="block text-gray-700 mb-2">E-mail:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
            type="email"
            placeholder="E-mail"
          />

          <label className="block text-gray-700 mb-2">Password:</label>
          <input
            name="pwd"
            value={formData.pwd}
            onChange={handleChange}
            className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
            type="password"
            placeholder="Password"
          />

          <label className="block text-gray-700 mb-2">Confirm Password:</label>
          <input
            name="confpwd"
            value={formData.confpwd}
            onChange={handleChange}
            className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
            type="password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-white bg-orange-500 hover:bg-orange-400 rounded-lg p-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
