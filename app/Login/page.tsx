"use client";
import React, { useState } from "react";
import { loginUser } from "../utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    loginUser(email, password);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-8 h-[60vh] pt-[100px] flex justify-center items-center">
      <form className="bg-white shadow-md w-[600px] h-[270px] rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Log In
          </button>
          <p className="text-gray-600 text-xs">
            Not registered yet?{" "}
            <button
              className="text-blue-500 hover:text-blue-700"
              type="button"
              onClick={() => {
                // Redirect to sign-up page or show sign-up form
                console.log("Navigate to sign-up");
              }}
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
