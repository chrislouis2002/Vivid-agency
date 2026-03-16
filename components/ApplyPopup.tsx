"use client";

import { useState } from "react";

export default function ApplyPopup({ open, setOpen }: any) {

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

  function goToFAQ() {
    setOpen(false);

    setTimeout(() => {
      const faqSection = document.querySelector("#faq") as HTMLElement;

      if (faqSection) {
        faqSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 300);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 overflow-y-auto">

      <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900 p-6 shadow-2xl border border-red-500/30">

        {/* WARNING HEADER */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-red-400 mb-3">
          ⚠️ Important Before Applying
        </h2>

        {/* WARNING BOX */}
        <div className="bg-red-500/10 border border-red-500/40 rounded-lg p-4 mb-5">

          <p className="text-base font-semibold text-red-300 leading-relaxed">
            This role involves <span className="text-white font-bold">private one-on-one Sex video calls</span> 
            with paying customers.
          </p>

          <p className="text-base text-red-200 mt-2 leading-relaxed">
            During these sessions you may be expected to <span className="font-bold text-white">
            perform adult entertainment, including nudity and explicit behaviour on Video call
            </span>.
          </p>

          <p className="text-sm text-red-200 mt-3">
            Please read the checklist carefully and confirm you fully understand the nature of this work before applying.
          </p>

        </div>

        {/* PROGRESS */}
        <div className="mb-6 text-sm font-semibold text-indigo-300">
          Checklist completed: {totalChecked} / 4
        </div>

        {/* CHECKLIST */}
        <div className="space-y-4 text-sm text-indigo-200">

          <label className="flex gap-3 items-start">
            <input type="checkbox" onChange={() => toggleCheck("work")} className="mt-1" />
            I understand that this job involves adult live streaming and using my nakedness to make men orgasm through private video calls.
          </label>

          <label className="flex gap-3 items-start">
            <input type="checkbox" onChange={() => toggleCheck("video")} className="mt-1" />
            I confirm that I have watched the introduction video explaining the role.
          </label>

          <label className="flex gap-3 items-start">
            <input type="checkbox" onChange={() => toggleCheck("faq")} className="mt-1" />
            I confirm that I have read the Frequently Asked Questions section.
          </label>

          <label className="flex gap-3 items-start">
            <input type="checkbox" onChange={() => toggleCheck("accommodation")} className="mt-1" />
            I understand that living in the accommodation provided by the agency during the contract period is mandatory.
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

          <button
            onClick={goToFAQ}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 text-sm"
          >
            Read Frequently Asked Questions
          </button>

        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">

  <button
    onClick={() => setOpen(false)}
    className="text-indigo-300 text-sm hover:text-white px-4 py-2"
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
    I Understand - Continue Application
  </a>

</div>

      </div>

    </div>
  );
}