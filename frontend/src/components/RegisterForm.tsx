import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate registration logic
    console.log("Registering with:", formData);

    // Simulate success
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company (Optional)"
        value={formData.company}
        onChange={handleChange}
        className="w-full p-2 mb-6 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;

