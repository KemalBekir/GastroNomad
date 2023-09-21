import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-20 right-0 w-full mb-10">
      <nav className="flex absolute right-0 justify-between items center px-6 py-4 w-full">
        <div>
          <Link href="/" className="absolute left-10 ">
            <Image
              src="/logo.png"
              alt="Gastro Nomad"
              width={140}
              height={140}
            />
          </Link>
        </div>
        <div>
          <Link href="/" className="text-white uppercase text-2xl px-6">
            Home
          </Link>
          <Link href="/Login" className="text-white uppercase text-2xl px-6">
            Login
          </Link>
          <Link href="/Register" className="text-white uppercase text-2xl px-6">
            Register
          </Link>
          <Link href="/logout" className="text-white uppercase text-2xl px-6">
            Logout
          </Link>
          <Link href="/Blog" className="text-white uppercase text-2xl px-6">
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
