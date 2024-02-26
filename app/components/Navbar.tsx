import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-white/30">
      <div className="w-full h-full p-right-10 pr-10 flex flex-row gap-4 justify-end items-center">
        <Link
          href="../page"
          className="pb-2 pt-2 pr-6 pl-6 bg-blue-500 rounded-full hover:bg-blue-400 text-white font-bold"
        >
          Home
        </Link>
        <Link
          href="/weather"
          className="pb-2 pt-2 pr-6 pl-6 bg-blue-500 rounded-full  hover:bg-blue-400 text-white font-bold"
        >
          Weather
        </Link>
        <Link
          href="../page"
          className="pb-2 pt-2 pr-6 pl-6 bg-blue-500 rounded-full  hover:bg-blue-400 text-white font-bold"
        >
          Stocks
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
