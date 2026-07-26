import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../configs/api";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {

  const query = new URLSearchParams(window.location.search)
  const urlstate = query.get('state')
  const [state, setState] = React.useState(urlstate || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      dispatch(login(data));

      localStorage.setItem("token", data.token);

      toast.success(data.message);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div
  className="bg-black relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-[url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')] bg-cover bg-center bg-no-repeat"
>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-175 h-87.5 rounded-full bg-indigo-700/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-87.5 h-62.5 rounded-full bg-violet-700/20 blur-[120px]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl px-8 py-10 shadow-2xl"
      >
        <h1 className="text-4xl font-semibold text-white text-center">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>

        <p className="mt-3 text-center text-slate-400 text-sm">
          Please sign in to continue
        </p>

        {/* Name */}
        {state !== "login" && (
          <div className="mt-8 flex items-center h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 focus-within:border-indigo-500 px-5 gap-3 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#0077b6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
            />
          </div>
        )}

        {/* Email */}
        <div className="mt-5 flex items-center h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 focus-within:border-indigo-500 px-5 gap-3 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#0077b6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />
        </div>

        {/* Password */}
        <div className="mt-5 flex items-center h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 focus-within:border-indigo-500 px-5 gap-3 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#0077b6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />
        </div>

        {/* Forgot Password */}
        <div className="mt-4 text-right">
          <button
            type="button"
            className="text-sm text-[#0077b6] hover:text-text-[#0077b6]/10 transition"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full h-12 rounded-xl bg-[#0077b6] hover:bg-[#0096c7] text-white font-medium transition duration-300 shadow-lg shadow-[#0077b6]/30"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        {/* Toggle Login/Register */}
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="mt-6 text-center text-slate-400 text-sm cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <span className="ml-2 text-[#0077b6] hover:text-[#0096c7] transition font-medium">
            {state === "login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;