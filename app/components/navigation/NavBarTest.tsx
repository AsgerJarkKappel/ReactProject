"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import path from "path";
import { FaBars, FaTimes } from "react-icons/fa";
import { pages } from "./pageLinks";
import SideBar from "./SideBar";

const NavBarTest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navItems = pages.map((item) => (
    <NavItem key={item.rankID} path={item.path}>
      {item.label}
    </NavItem>
  ));
  return (
    <>
      <nav className="w-full h-12 bg-white fixed top-0 left-0 z-50">
        <div className="hidden w-full h-full pr-10 sm:flex flex-row gap-4 justify-end items-center">
          {navItems}
        </div>
        <div className="text-black w-full h-full flex sm:hidden flex-row justify-end items-center">
          <button id="menuButton" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </nav>
      {isSidebarOpen && <SideBar closeSidebar={closeSidebar} />}
    </>
  );
};

export default NavBarTest;
