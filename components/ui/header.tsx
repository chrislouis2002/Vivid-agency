"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  function goToSection(id: string) {
    setMenuOpen(false);

    setTimeout(() => {
      const el = document.querySelector(id) as HTMLElement;

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);
  }

  return (
    <header className="sticky top-0 z-50 mt-2 w-full md:mt-5">

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="relative flex h-14 items-center justify-between rounded-2xl bg-gray-900/90 px-4 backdrop-blur">

          {/* LEFT - HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <span className="w-5 h-[2px] bg-white mb-1"></span>
            <span className="w-5 h-[2px] bg-white mb-1"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </button>

          {/* RIGHT - NAV */}
          <div className="flex items-center gap-6">

            <Link
              href="/"
              className="text-white text-sm font-medium hover:text-indigo-300 transition"
            >
              Home
            </Link>

            <button
              onClick={() => goToSection("#faq")}
              className="text-white text-sm font-medium hover:text-indigo-300 transition"
            >
              Frequently Asked Questions
            </button>

          </div>

        </div>

      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* SLIDE MENU FROM LEFT */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[85%] max-w-sm bg-gray-900 shadow-2xl transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">

          <h3 className="text-white font-semibold text-lg">
            Menu
          </h3>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>

        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-4">

          <button
            onClick={() => goToSection("#faq")}
            className="w-full text-left px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            Frequently Asked Questions
          </button>

          <button
            onClick={() => goToSection("#income-potential")}
            className="w-full text-left px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            How Much Can I Earn
          </button>

          <button
            onClick={() => goToSection("#ReferralProgram")}
            className="w-full text-left px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            Refer a Friend
          </button>

          

          <a
            href="https://wa.me/2349052854671"
            target="_blank"
            className="block text-center px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Chat with Admin
          </a>

        </div>

      </div>

    </header>
  );
}