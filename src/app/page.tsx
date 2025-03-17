"use client";

import { promisify } from "util";
import { useEffect, useState } from "react";
import crypto from "crypto";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const pwordComplexityVerification = (password: string) => {
    // Example: Check if password is at least 8 characters long
    if (password.length >= 8) {
      return true;
    }
    return false;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  // TODO: Implement password hashing and salting
  // unused
  const hashPassword = (password: string) => {
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('base64');
    return { salt, hash };
  }



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form method="POST" action="http://localhost/TEST_DB_API/api.php">
          <div className="text-left items-left justify-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring"></input>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring"></input>
            </div>
            <div className="relative">
              <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring"></input>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
                {showPassword ? "Hide" : "Show"}
              </button>
              </div>
              <div>
                <p className="text-sm text-gray-500 mt-1"
                style={{ color: pwordComplexityVerification(password) ? "green" : "red" }}>
                  Password must be at least 8 characters long.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                name="submit"
                type="submit"
                value={"Submit"}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
