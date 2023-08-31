import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full absolute top-0 z-10">
      <div className="w-[70%] ml-auto mr-auto flex justify-between mt-5">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/new-logo.svg"
              alt="Logo"
              className="w-16 h-16 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex space-x-6 h-12 ">
          <Link
            href="/auth/signin"
            className="px-4 py-3 rounded text-green-300 border-2 border-green-200 border-solid"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-3 text-white rounded bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
