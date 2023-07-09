"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  return (
    <nav className="flex-between  w-full mb-16 pt-3">
      <Link
        href="/"
        className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="SufleCenter logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">SufleCenter</p>
      </Link>
    </nav>
  );
}

export default Nav;
