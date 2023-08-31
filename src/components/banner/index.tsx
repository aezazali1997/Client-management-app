import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-green-300 h-[30rem] flex flex-col justify-center items-center">
      <h1
        className="text-4xl font-bold mb-4"
        style={{
          color: "#417156",
        }}
      >
        Get notified about your clients using our Client Management Tool
      </h1>
      <Link
        href="/auth/signup"
        className="bg-white text-green-300 mt-4 px-8 py-4 rounded-full font-semibold text-xl"
        style={{
          color: "#417156",
        }}
      >
        Join Now
      </Link>
    </div>
  );
};

export default Banner;
