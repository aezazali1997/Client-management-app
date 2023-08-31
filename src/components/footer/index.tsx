import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-28 flex justify-between text-center items-center bg-blue-950 py-10 px-24">
      <div className="flex">
        <Image src="/vercel.svg" alt="" className="h-20 w-20 " />
      </div>
      <div className="flex text-green-300">&#169;CMS All Rights Reserved</div>
    </div>
  );
};

export default Footer;
