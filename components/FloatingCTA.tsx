"use client";

export default function FloatingCTA() {
  return (
    <a
      href="https://tally.so/r/Np7a5l"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-5 z-[100] group"
    >
      <div className="relative flex items-center justify-center px-6 py-3 rounded-full 
      bg-red-900 text-white font-semibold text-sm shadow-xl 
      hover:bg-red-800 hover:scale-110 transition-all duration-300">

        Apply Now

        {/* Attention Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-40 animate-ping"></span>

      </div>
    </a>
  );
}