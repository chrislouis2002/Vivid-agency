"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 backdrop-blur">

          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation buttons */}
          <ul className="flex flex-1 items-center justify-end gap-3">

            <li>
              <Link
                href="/#faq"
                className="btn-sm relative border border-indigo-500 bg-gray-800 py-[5px] px-4 text-white rounded shadow-sm hover:bg-indigo-600 hover:border-indigo-400 transition-all duration-300"
              >
                FAQ
              </Link>
            </li>

            {/* <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-gray-800 py-[5px] px-3 text-white rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Sign In
              </Link>
            </li> */}

            {/* <li>
              <Link
                href="/signup"
                className="btn-sm relative bg-indigo-800 py-[5px] px-3 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
              >
                Register
              </Link>
            </li> */}

             <Link
  href="https://wa.me/234XXXXXXXXXX"
  target="_blank"
  className="inline-flex items-center gap-2 bg-green-500 px-5 py-2 rounded-lg text-white font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.95.51 3.85 1.49 5.54L2 22l4.74-1.6a9.83 9.83 0 005.3 1.54h.01c5.46 0 9.89-4.42 9.89-9.88S17.5 2 12.04 2zm5.73 13.91c-.24.67-1.42 1.28-1.95 1.35-.5.06-1.14.09-1.83-.14-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.93-4.39-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.02-2.41c.26-.29.57-.36.75-.36.19 0 .38.01.54.01.17.01.4-.06.63.5.24.57.82 1.98.9 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.29.7 1.16 1.5 1.88 1.03.92 1.9 1.21 2.18 1.35.29.14.46.12.63-.07.17-.19.74-.86.94-1.15.19-.29.38-.24.63-.14.26.09 1.62.76 1.9.9.29.14.48.21.55.33.07.12.07.69-.17 1.35z"/>
  </svg>

  {/* Chat on WhatsApp */}
</Link>

          </ul>
        </div>
      </div>
    </header>
  );
}