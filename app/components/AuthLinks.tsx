"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const { status } = useSession();
  console.log(status);

  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Link href="/Login" className="text-white uppercase text-2xl px-6">
            Login
          </Link>
          <Link href="/Register" className="text-white uppercase text-2xl px-6">
            Register
          </Link>
        </>
      ) : (
        <>
          <Link href="/logout" className="text-white uppercase text-2xl px-6">
            Logout
          </Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
