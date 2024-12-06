import React, { useState } from 'react';
import apiClient from '../config/axiosConfig';
import toast from 'react-hot-toast';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',

    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await apiClient.post('/auth/login', formData);
      if (!res.ok) {
        toast.error();
        throw new Error('Something went wrong!');
      }
      const data = await res.json();

      console.log('Response:', data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-6 border-2 border-gray-200 rounded-lg shadow-lg w-full max-w-lg bg-white space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-700">সাইনআপ ফর্ম</h1>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <label className="block">
            <span className="text-gray-600">আপনার ইমেল এড্রেস লিখুন</span>
            <input
              type="email"
              name="email"
              placeholder="আপনার ইমেল লিখুন"
              className="input input-bordered w-full mt-1"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password */}
          <label className="block">
            <span className="text-gray-600">পাসওয়ার্ড দিন</span>
            <input
              type="password"
              name="password"
              placeholder="পাসওয়ার্ড লিখুন"
              className="input input-bordered w-full mt-1"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
