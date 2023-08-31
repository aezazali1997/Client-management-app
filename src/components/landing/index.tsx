import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/client.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-9 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-extrabold">We manage your clients</h1>
        <p className="mt-4 text-lg">
          Get free from the headache of managing each Client
        </p>
        <Link
          href="/auth/signup"
          className="mt-8 px-6 py-3 text-lg font-semibold  text-green-300 border-green-300 border-2 hover:bg-green rounded-lg cursor-pointer hover:bg-opacity-90 "
        >
          Get Started for Free
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
