import React, { useState } from 'react';
import axios from 'axios'

function Login({ setRole }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
  
    try {
      const response = await axios.post("/api/login", formData);
  
      if (response.data.success) {
        setRole(response.data.role);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  };
  
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-[#39d5ff]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#39d5ff]"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#39d5ff]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#39d5ff]"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#39d5ff]"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Age</label>
          <input
            type="number"
            name="age"
            className="w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#39d5ff]"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00C9FF] text-black py-2 rounded hover:bg-[#39d5ff] transition font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
