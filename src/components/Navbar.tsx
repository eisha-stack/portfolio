import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/0 bg-transparent backdrop-blur-sm transition-[border-color,background-color] duration-300 hover:border-white/5 hover:bg-black/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-xl font-bold tracking-widest text-blue-500 transition-all duration-200 hover:scale-105 hover:text-blue-300"
        >
          EK
        </Link>

        <ul className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="group relative whitespace-nowrap px-1 py-2 text-xs text-gray-300 transition-colors duration-200 hover:text-white sm:text-sm"
              >
                {item.name}
                <span className="absolute bottom-1 left-1 right-1 h-px origin-left scale-x-0 bg-blue-400 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
