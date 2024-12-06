import React, { useContext, useState } from 'react';
import apiClient from '../config/axiosConfig';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Signup() {
  const { setAuthData, authData } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
  });

  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await apiClient.post('/auth/signup', formData);

      console.log('Response:', res.data);
      const { accessToken, user } = res.data;
      if (accessToken && user) {
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
      }
      setAuthData({ token: accessToken, user: res.data.user });
      toast.success('Signup successful!');
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-6 border-2 border-gray-200 rounded-lg shadow-lg w-full max-w-lg bg-white space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-700">সাইনআপ ফর্ম</h1>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <label className="block">
            <span className="text-gray-600">আপনার নাম লিখুন</span>
            <input
              type="text"
              name="name"
              placeholder="আপনার নাম লিখুন"
              className="input input-bordered w-full mt-1"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

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

          {/* Phone */}
          <label className="block">
            <span className="text-gray-600">আপনার ফোন নাম্বার লিখুন</span>
            <input
              type="number"
              name="phoneNumber"
              placeholder="আপনার ফোন নাম্বার"
              className="input input-bordered w-full mt-1"
              value={formData.phone}
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

          {/* Role */}
          <label className="block">
            <span className="text-gray-600">আপনার কি হিসেবে যুক্ত হতে চান?</span>
            <select
              name="role"
              className="select select-bordered w-full mt-1"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                আপনার পদ বাচাই করুন
              </option>
              <option value="FARMER">কৃষক</option>
              <option value="BUYER">ক্রেতা</option>
            </select>
          </label>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Signup Now
          </button>
        </form>
        <p className="my-4 text-textSecondary text-right">
          আপনার ইতিমধ্যে একাউন্ট আছে?{' '}
          <Link to="/signin" className="text-blue-500">
            লগিন করুন
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
