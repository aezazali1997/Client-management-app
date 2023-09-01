import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-40 flex justify-between text-center items-center bg-blue-950 py-10 px-24">
      <div className="flex">
        <Image src="/vercel.svg" alt="" width={120} height={120} />
        <div className="flex text-green-300 ml-10">
          &#169;CMS All Rights Reserved
        </div>
      </div>
      <div className="text-left">
        <ul>
          <li>
            <Link href="/" className="text-green-300 hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="text-green-300 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/" className="text-green-300 hover:underline">
              Terms and Service
            </Link>
          </li>
          <li>
            <Link href="/" className="text-green-300 hover:underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
