"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
         {/* Desktop sign in links */}
<ul className="flex flex-1 items-center justify-end gap-3">
  <li>
    <Link
      href="/signin"
      className="btn-sm relative bg-gray-800 py-[5px] px-3 text-white rounded hover:bg-gray-700 transition-colors duration-300"
    >
      Sign In
    </Link>
  </li>
  <li>
    <Link
      href="/signup"
      className="btn-sm relative bg-indigo-800 py-[5px] px-3 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
    >
      Register
    </Link>
  </li>
  
</ul>
        </div>
      </div>
    </header>
  );
}
