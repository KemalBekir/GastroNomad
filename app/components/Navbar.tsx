import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-20 right-0 w-[90%] ">
      <nav className="flex absolute right-0 justify-between items center px-6 py-4">
        <Link href="/" className="text-white uppercase text-2xl px-6">
          Home
        </Link>
        <Link href="/login" className="text-white uppercase text-2xl px-6">
          Login
        </Link>
        <Link href="/logout" className="text-white uppercase text-2xl px-6">
          Logout
        </Link>
        <Link href="/blog" className="text-white uppercase text-2xl px-6">
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
