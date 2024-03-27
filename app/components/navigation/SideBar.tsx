import React from "react";
import { pages } from "./pageLinks";
import NavItem from "./NavItem";

interface SideBarProps {
  closeSidebar: () => void; // Callback function to close the sidebar
}

const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
  const navItems = pages.map((item) => (
    <NavItem key={item.rankID} path={item.path} onClick={closeSidebar}>
      {item.label}
    </NavItem>
  ));
  return (
    <nav className="fixed w-48 top-12 right-0 p-3 bg-white z-50 shadow-lg rounded-b-xl">
      <div className="flex flex-col gap-3">{navItems}</div>
    </nav>
  );
};

export default SideBar;
