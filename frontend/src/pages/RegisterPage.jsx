import React, { useState } from "react";

const initialSignUp = { name: "", email: "", password: "" };
const initialSignIn = { email: "", password: "" };

const RegisterPage = () => {
  const [mode, setMode] = useState("signup");
  const [signUpData, setSignUpData] = useState(initialSignUp);
  const [signInData, setSignInData] = useState(initialSignIn);
  const [errors, setErrors] = useState({});

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpData((prev) => ({ ...prev, [name]: value }));
    } else {
      setSignInData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateSignUp = () => {
    const errs = {};
    if (!signUpData.name.trim()) errs.name = "Name is required";
    if (!signUpData.email.trim()) errs.email = "Email is required";
    if (!signUpData.password) errs.password = "Password is required";
    return errs;
  };

  const validateSignIn = () => {
    const errs = {};
    if (!signInData.email.trim()) errs.email = "Email is required";
    if (!signInData.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};
    if (mode === "signup") {
      errs = validateSignUp();
      setErrors(errs);
      if (Object.keys(errs).length === 0) {
        alert("Sign up successful (mock)");
      }
    } else {
      errs = validateSignIn();
      setErrors(errs);
      if (Object.keys(errs).length === 0) {
        alert("Sign in successful (mock)");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="w-full max-w-md p-8 bg-white/90 rounded-3xl shadow-2xl border border-gray-100 relative">
        {/* Professional Heading */}
        <div className="flex justify-center mb-6"></div>
        {/* Toggle */}
        <div className="flex items-center justify-center mb-8 relative">
          <div className="w-64 h-12 bg-gray-100 rounded-full flex items-center relative shadow-inner">
            <div
              className={`absolute top-1 left-1 h-10 w-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                mode === "signin" ? "translate-x-full" : "translate-x-0"
              }`}
              style={{ zIndex: 1, width: "calc(50% - 0.25rem)" }}
            ></div>
            <button
              className={`flex-1 cursor-pointer z-10 h-10 rounded-full text-lg font-semibold transition-colors ${
                mode === "signup" ? "text-white" : "text-gray-500"
              }`}
              style={{ background: "transparent" }}
              onClick={() => {
                setMode("signup");
                setErrors({});
              }}
              type="button"
            >
              Sign Up
            </button>
            <button
              className={`flex-1 cursor-pointer z-10 h-10 rounded-full text-lg font-semibold transition-colors ${
                mode === "signin" ? "text-white" : "text-gray-500"
              }`}
              style={{ background: "transparent" }}
              onClick={() => {
                setMode("signin");
                setErrors({});
              }}
              type="button"
            >
              Sign In
            </button>
          </div>
        </div>
        {/* Divider */}
        <div className="flex items-center mb-8">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 font-light text-sm tracking-wide">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          {mode === "signup" ? (
            <>
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={signUpData.name}
                  onChange={(e) => handleChange(e, "signup")}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 text-base ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={(e) => handleChange(e, "signup")}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 text-base ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-8">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={(e) => handleChange(e, "signup")}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 text-base ${
                    errors.password ? "border-red-400" : "border-gray-200"
                  }`}
                  required
                  minLength={6}
                />
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={signInData.email}
                  onChange={(e) => handleChange(e, "signin")}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 text-base ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-8">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={signInData.password}
                  onChange={(e) => handleChange(e, "signin")}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 text-base ${
                    errors.password ? "border-red-400" : "border-gray-200"
                  }`}
                  required
                  minLength={6}
                />
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                )}
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full cursor-pointer py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold text-lg shadow-md mt-2"
          >
            {mode === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
