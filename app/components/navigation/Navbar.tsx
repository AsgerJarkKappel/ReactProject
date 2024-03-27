import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const projects = [
    {
      path: "./",
    },

    {
      id: 1,
      img: "stock1",
      title: "Stock App",
      path: "/weather",
      description:
        "This project will also use public API to display stock data and perhaps graphs",
    },

    {
      id: 2,
      img: "vercel",
      title: "Fitness/calorie tracker",
      path: "/weather",
      description:
        "This proejct will use a database to track my own fitness data and calorie intake",
    },
  ];
  return (
    <nav className="w-full h-12 bg-white/30">
      <div className="w-full h-full p-right-10 pr-10 flex flex-row gap-4 justify-end items-center">
        <Link
          href="../"
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
