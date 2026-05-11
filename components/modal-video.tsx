"use client";

import { useState, useRef } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";

interface ModalVideoProps {
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {

  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">

      {/* Video Thumbnail */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >

        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">

          <Image
            className="opacity-70"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            priority
          />

        </figure>

        {/* Play Button */}
<span className="pointer-events-none absolute flex flex-col items-center">

  {/* BUTTON */}
  <span className="relative flex items-center justify-center h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/40">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
        clipRule="evenodd"
      />
    </svg>

  </span>

  {/* TEXT */}
  <span className="mt-3 text-sm font-semibold text-white tracking-wide bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105">
    Play me!
  
  </span>

</span>

      </button>

      {/* Video Modal */}
      <Dialog
        initialFocus={videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >

        <DialogBackdrop
          className="fixed inset-0 z-50 bg-black/70 transition-opacity"
        />

        <div className="fixed inset-0 z-50 flex px-4 py-6 sm:px-6">

          <div className="mx-auto flex h-full max-w-6xl items-center">

            <DialogPanel className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">

  {/* CLOSE BUTTON */}
  <button
    onClick={() => setModalOpen(false)}
    aria-label="Close video"
    className="absolute top-3 right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white text-xl font-bold backdrop-blur hover:bg-black/90 active:scale-95 transition"
  >
    ✕
  </button>

  <video
    ref={videoRef}
    width={videoWidth}
    height={videoHeight}
    loop
    controls
    className="w-full h-auto"
  >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </DialogPanel>

          </div>

        </div>

      </Dialog>

    </div>
  );
}