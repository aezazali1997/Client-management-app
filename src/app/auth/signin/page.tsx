"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex flex-1 flex-col justify-center items-center bg-gray-100 w-full">
        <h1 className="text-2xl mb-4">Welcome back!</h1>
        <form onSubmit={handleSubmit} className="w-4/5 sm:w-2/5">
          <div className="mb-4">
            <label>Email:</label>
            <input
              className="p-2 mt-2 w-full border rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label>Password:</label>
            <input
              className="p-2 mt-2 w-full border rounded"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 top-8 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <span className="text-lg">&#128065;</span>
              ) : (
                <span className="text-lg">&#128064;</span>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded w-32"
            >
              Submit
            </button>
            <hr />
          </div>
          <div className="tex-center flex justify-center mt-5">
            <Link href="/auth/signup" className="text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden flex-1 bg-gray-300 sm:w-3/5 sm:flex items-center justify-center">
        <img src="/auth-image.jpg" alt="Some description" className="w-2/3" />
      </div>

      <div className="flex-1 bg-gray-300 sm:hidden"></div>
    </div>
  );
};

export default SignIn;
