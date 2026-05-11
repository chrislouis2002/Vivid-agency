"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const dmScreenshots = [
  "/images/wa-chats/wa-chat-1.jpg",
  "/images/wa-chats/wa-chat-2.jpg",
  "/images/wa-chats/wa-chat-3.jpg",
  "/images/wa-chats/wa-chat-4.jpg",
  "/images/wa-chats/wa-chat-5.jpg",
  "/images/wa-chats/wa-chat-6.jpg",
  "/images/wa-chats/wa-chat-7.jpg",
  "/images/wa-chats/wa-chat-8.jpg",
  "/images/wa-chats/wa-chat-9.jpg",
  "/images/wa-chats/wa-chat-10.jpg",
  "/images/wa-chats/wa-chat-11.jpg",
  "/images/wa-chats/wa-chat-12.jpg",
  "/images/wa-chats/wa-chat-13.jpg",
  "/images/wa-chats/wa-chat-14.jpg",
  "/images/wa-chats/wa-chat-15.jpg",
  "/images/wa-chats/wa-chat-16.jpg",
  "/images/wa-chats/wa-chat-17.jpg",
  "/images/wa-chats/wa-chat-18.jpg",
  "/images/wa-chats/wa-chat-19.jpg",
  "/images/wa-chats/wa-chat-20.jpg",
  "/images/wa-chats/wa-chat-21.jpg",
  "/images/wa-chats/wa-chat-22.jpg",
  "/images/wa-chats/wa-chat-23.jpg",
  "/images/wa-chats/wa-chat-24.jpg",
  "/images/wa-chats/wa-chat-25.jpg",
  "/images/wa-chats/wa-chat-26.jpg",
  "/images/wa-chats/wa-chat-27.jpg",
  "/images/wa-chats/wa-chat-28.jpg",
  "/images/wa-chats/wa-chat-29.jpg",
  "/images/wa-chats/wa-chat-30.jpg",
  "/images/wa-chats/wa-chat-31.jpg",
  "/images/wa-chats/wa-chat-32.jpg",
  "/images/wa-chats/wa-chat-33.jpg",
  "/images/wa-chats/wa-chat-34.jpg",
  "/images/wa-chats/wa-chat-35.jpg",
];

export default function JobPreview() {
  const [viewers, setViewers] = useState(300);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* RANDOM VIEWERS */
  useEffect(() => {
    const update = () => {
      setViewers(
        Math.floor(Math.random() * (1200 - 300 + 1)) + 300
      );
    };

    update();

    const interval = setInterval(update, 2000);

    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    setCurrentSlide((prev) =>
      prev === dmScreenshots.length - 1 ? 0 : prev + 1
    );
  }

  function prevSlide() {
    setCurrentSlide((prev) =>
      prev === 0 ? dmScreenshots.length - 1 : prev - 1
    );
  }

  return (
    <section id="workflows">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            See Exactly How You Will Make Money
          </h2>

          <p className="text-indigo-200/70">
            This is what your daily workflow looks like.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* STEP 1 */}
          <div className="rounded-2xl bg-gray-800 p-px">
            <div className="rounded-[inherit] bg-gray-950 p-4">

              <h3 className="text-white font-bold text-lg sm:text-2xl md:text-3xl mb-3">
                STEP 1. Go Live & Attract Viewers
              </h3>

              <div className="relative h-[500px] rounded-xl overflow-hidden">

                <video
                  src="/videos/preview.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded text-white">
                  LIVE
                </div>

                <div className="absolute top-2 right-2 text-white text-xs">
                  👁 {viewers}
                </div>

                <motion.div
                  animate={{ y: [-10, -80], opacity: [1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 right-4 text-pink-500 text-lg"
                >
                  ❤️
                </motion.div>

              </div>

            </div>
          </div>

          {/* STEP 2 */}
          <div className="rounded-2xl bg-gray-800 p-px">
            <div className="rounded-[inherit] bg-gray-950 p-4">

              <h3 className="text-white font-bold text-lg sm:text-2xl md:text-3xl mb-3">
                STEP 2. Receive Messages & Payments
              </h3>

              <div className="relative h-[500px] rounded-xl overflow-hidden bg-black">

                {/* SLIDER */}
                <motion.div
                  className="flex h-full"

                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    (e.currentTarget as any).startX = touch.clientX;
                  }}

                  onTouchEnd={(e) => {
                    const touch = e.changedTouches[0];
                    const startX = (e.currentTarget as any).startX;

                    const diff = touch.clientX - startX;

                    // swipe left
                    if (diff < -50) {
                      nextSlide();
                    }

                    // swipe right
                    if (diff > 50) {
                      prevSlide();
                    }
                  }}

                  animate={{
                    x: `-${currentSlide * 100}%`,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                  }}
                >

                  {dmScreenshots.map((img, index) => (
                    <div
                      key={index}
                      className="relative min-w-full h-full select-none"
                    >
                      <Image
                        src={img}
                        alt={`WhatsApp chat ${index + 1}`}
                        fill
                        draggable={false}
                        className="object-cover pointer-events-none"
                      />
                    </div>
                  ))}

                </motion.div>

                {/* ARROWS */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80 transition"
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80 transition"
                >
                  →
                </button>

               {/* INSTAGRAM STYLE DOTS */}
<div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">

  {dmScreenshots.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`h-2 w-2 rounded-full transition-all duration-300 ${
        currentSlide === index
          ? "bg-white scale-125"
          : "bg-white/40"
      }`}
    />
  ))}

</div>

              </div>

            </div>
          </div>

          {/* STEP 3 */}
          <div className="rounded-2xl bg-gray-800 p-px">
            <div className="rounded-[inherit] bg-gray-950 p-4">

              <h3 className="text-white font-bold text-lg sm:text-2xl md:text-3xl mb-3">
                STEP 3. Private Paid Video Call
              </h3>

              <div className="relative h-[500px] rounded-xl overflow-hidden">

                <video
                  src="/videos/private-call.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

                  <div className="text-sm">
                    🔒 Private 1-on-1 Session
                  </div>

                  <div className="text-indigo-300 text-xs mt-2">
                    Higher payments happen here
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}