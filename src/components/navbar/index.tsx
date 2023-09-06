import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full absolute top-0 z-10">
      <div className="w-[70%] ml-auto mr-auto flex justify-between mt-5">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/new-logo.svg"
              alt="Logo"
              className="w-16 h-16 cursor-pointer"
              width={40}
              height={40}
            />
          </Link>
        </div>

        <div className="flex space-x-6 h-12 ">
          <Link
            href="/auth/signin"
            className="px-4 rounded text-green-300 border-2 border-green-200 border-solid flex justify-center items-center"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 text-white rounded bg-green-600 flex justify-center items-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
