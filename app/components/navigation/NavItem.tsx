import Link from "next/link";
import path from "path";
import React from "react";

interface NavItemProps {
  path: string; // Add a prop to receive the path for the link
  children: React.ReactNode; // Allow for dynamic content inside the link
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ path, children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick callback if provided
    }
  };
  return (
    <Link
      href={path}
      className="pb-2 pt-2 pr-6 pl-6 bg-blue-500 rounded-full  hover:bg-blue-400 text-white font-bold text-center"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default NavItem;
