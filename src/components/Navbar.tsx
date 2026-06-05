import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-xl font-bold tracking-widest text-blue-500 transition-colors hover:text-blue-400"
        >
          EK
        </Link>

        <ul className="flex items-center gap-3 text-xs text-gray-300 sm:gap-6 sm:text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
