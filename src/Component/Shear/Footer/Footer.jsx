import React from "react";
import { AiOutlineX } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1a8862] p-10 text-white text-center flex flex-col justify-center items-center space-y-5 mt-10">
      <h1 className="md:text-5xl font-bold">KeenKeeper</h1>
      <p className="text-shadow-indigo-50">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <h1 className="font-bold text-2xl">Social Links</h1>
      <div className="flex text-black gap-3">
        <FaInstagram className="bg-white text-5xl rounded-4xl p-2" />
        <FaFacebookF className="bg-white text-5xl rounded-4xl p-2" />
        <AiOutlineX className="bg-white text-5xl rounded-4xl p-2" />
      </div>
      <div className="divider"></div>
      <div className="w-full text-[#fafafa] flex flex-col md:flex-row justify-between">
        <div>© 2026 KeenKeeper. All rights reserved.</div>
        <div className="flex gap-1 md:gap-7">
          <p>Privacy Policy </p>
          <p>Terms of Service </p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
