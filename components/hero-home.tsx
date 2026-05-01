"use client";

import { useState } from "react";
import ModalVideo from "@/components/modal-video";
import ApplyPopup from "@/components/ApplyPopup";

const VideoThumb = "/images/vivid-hero.jpg";

export default function HeroHome() {

  const [open, setOpen] = useState(false);

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
                Earn a base income of <span className=" text-2xl font-bold text-red-400 mb-3">₦500,000</span> with bonus income every 3 months.
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
                    href="https://wa.me/2349137385418"
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

      {/* GLOBAL APPLY POPUP */}

      <ApplyPopup open={open} setOpen={setOpen} />

    </section>
  );
}