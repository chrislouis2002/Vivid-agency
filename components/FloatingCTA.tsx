"use client";

import { useState } from "react";

export default function FloatingCTA() {

  const [open, setOpen] = useState(false);

  const [checks, setChecks] = useState({
    work: false,
    video: false,
    faq: false,
    accommodation: false
  });

  const totalChecked =
    Number(checks.work) +
    Number(checks.video) +
    Number(checks.faq) +
    Number(checks.accommodation);

  const allChecked = totalChecked === 4;

  function toggleCheck(name: string) {
    setChecks({
      ...checks,
      [name]: !checks[name as keyof typeof checks],
    });
  }

  function playVideo() {
    setOpen(false);

    setTimeout(() => {
      const videoButton = document.querySelector("#video button") as HTMLElement;

      if (videoButton) {
        videoButton.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        videoButton.click();
      }
    }, 300);
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-24 right-5 z-[100] group"
      >
        <div className="relative flex items-center justify-center px-6 py-3 rounded-full 
        bg-red-900 text-white font-semibold text-sm shadow-xl 
        hover:bg-red-800 hover:scale-110 transition-all duration-300">

          Apply Now

          {/* Attention Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-40 animate-ping"></span>

        </div>
      </button>

      {/* CHECKLIST POPUP */}
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4">

          <div className="w-full max-w-xl rounded-2xl bg-gray-900 p-6 shadow-2xl">

            <h2 className="text-xl font-semibold text-white mb-2">
              Important Before Applying
            </h2>

            <p className="text-indigo-200/70 text-sm mb-4">
              This role involves private one-on-one online video sessions with
              adult customers. Please ensure you fully understand the nature of
              the work before continuing with your application.
            </p>

            {/* PROGRESS */}
            <div className="mb-6 text-sm text-indigo-300">
              Checklist completed: {totalChecked} / 4
            </div>

            {/* CHECKLIST */}
            <div className="space-y-4 text-sm text-indigo-200">

              <label className="flex gap-3">
                <input
                  type="checkbox"
                  onChange={() => toggleCheck("work")}
                />
                I understand the nature of the work and confirm I am comfortable
                performing the duties required for the role.
              </label>

              <label className="flex gap-3">
                <input
                  type="checkbox"
                  onChange={() => toggleCheck("video")}
                />
                I confirm that I have watched the introduction video explaining
                the role.
              </label>

              <label className="flex gap-3">
                <input
                  type="checkbox"
                  onChange={() => toggleCheck("faq")}
                />
                I confirm that I have read the Frequently Asked Questions
                section.
              </label>

              <label className="flex gap-3">
                <input
                  type="checkbox"
                  onChange={() => toggleCheck("accommodation")}
                />
                I understand that living in the accommodation provided by the
                agency during the contract period is mandatory.
              </label>

            </div>

            {/* HELP BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-6">

              <button
                onClick={playVideo}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 text-sm"
              >
                Watch Video
              </button>

              <a
                href="/#faq"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 text-sm"
              >
                Read FAQ
              </a>

            </div>

            {/* ACTIONS */}
            <div className="flex justify-between mt-8">

              <button
                onClick={() => setOpen(false)}
                className="text-indigo-300 text-sm hover:text-white"
              >
                Cancel
              </button>

              <a
                href="https://tally.so/r/Np7a5l"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-lg text-white text-sm transition-all ${
                  allChecked
                    ? "bg-indigo-600 hover:bg-indigo-500"
                    : "bg-gray-700 pointer-events-none cursor-not-allowed"
                }`}
              >
                Continue to Application
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}
