"use client";

import { useState } from "react";
import ModalVideo from "@/components/modal-video";

const VideoThumb = "/images/vivid-hero.jpg";

export default function HeroHome() {

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
    // close popup first
    setOpen(false);

    // wait for popup animation then trigger video
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
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">

            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Become a Paid Live Streamer
            </h1>

            <div className="mx-auto max-w-3xl">

              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Earn a base income of ₦450,000 with bonus income every 3 months.
                Accommodation, equipment and training provided.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">

                {/* APPLY BUTTON */}
                <div data-aos="fade-up" data-aos-delay={400}>
                  <button
                    onClick={() => setOpen(true)}
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-lg hover:scale-105 sm:mb-0 sm:w-auto transition-transform duration-300"
                  >
                    <span className="relative inline-flex items-center">
                      Apply Now
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
                </div>

                {/* WhatsApp */}
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-green-600 text-white shadow-lg hover:bg-green-700 sm:w-auto transition-colors duration-300"
                    href="https://wa.me/2349052854671"
                    target="_blank"
                  >
                    Chat Admin
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* VIDEO */}
          <div id="video">
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="/videos/hero-video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>

        </div>
      </div>

      {/* APPLY POPUP */}
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
    </section>
  );
}
