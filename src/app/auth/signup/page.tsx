import React from "react";
import Link from "next/link";
import Image from "next/image";
const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Left - Signup Form */}
      <div className="flex flex-1 flex-col justify-center items-center bg-gray-100 sm:w-2/5">
        <h1 className="text-2xl mb-4">Sign Up</h1>
        <form className="w-4/5 sm:w-2/5">
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="date"
              placeholder="Date of Birth"
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="password"
              placeholder="Repeat Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="p-2 w-full bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
          <div className="tex-center flex justify-center mt-5">
            <Link href="/auth/signin" className="text-blue-500 hover:underline">
              Already have an Account? Sign In
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden flex-1 bg-gray-300 sm:w-3/5 sm:flex items-center justify-center">
        <Image
          src="/auth-image.jpg"
          alt="Some description"
          width={500}
          height={500}
        />
      </div>

      <div className="flex-1 bg-gray-300 sm:hidden"></div>
    </div>
  );
};

export default SignUp;
