"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import ApplyButton from "@/components/ApplyButton";

const moments = [
  {
    title: "Getting Ready",
    text: "Choose outfits, prepare your setup and get ready for your stream.",
    image: "/images/life1.jpg",
  },
  {
    title: "Live Streaming",
    text: "Connect with viewers, chat, flirt and build your audience.",
    image: "/images/life2.jpg",
  },
  {
    title: "After the Stream",
    text: "Relax, hang out with other hosts and check your earnings.",
    image: "/images/life3.jpg",
  },
];

const benefits = [
  "Flexible schedule",
  "Daily allowance",
  "High income potential",
  "Accommodation provided",
  "Training & support",
  "Work with other hosts",
];

export default function DayInLife() {
  return (
    <section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="py-20 md:py-28">

          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center mb-16">

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              A Day in the Life of a Streamer
            </h2>

            <p className="text-lg text-indigo-200/65">
              Flexible lifestyle. Strong income. Supportive environment.
            </p>

          </div>

          {/* VIDEO SECTION */}

          <div className="mb-20">

            <div className="relative overflow-hidden rounded-2xl bg-gray-800 p-px">

              <div className="rounded-[inherit] bg-gray-950 p-2">

                <video
                  controls
                  className="w-full rounded-xl"
                  poster="/images/day-preview.jpg"
                >
                  <source src="/videos/day-in-life.mp4" type="video/mp4" />
                </video>

              </div>

            </div>

          </div>

          {/* PHOTO GRID */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-20">

            <Image
              src="/images/lifestyle1.jpg"
              width={400}
              height={400}
              alt="Streamer lifestyle"
              className="rounded-xl object-cover"
            />

            <Image
              src="/images/lifestyle2.jpg"
              width={400}
              height={400}
              alt="Streamer lifestyle"
              className="rounded-xl object-cover"
            />

            <Image
              src="/images/lifestyle3.jpg"
              width={400}
              height={400}
              alt="Streamer lifestyle"
              className="rounded-xl object-cover"
            />

            <Image
              src="/images/lifestyle4.jpg"
              width={400}
              height={400}
              alt="Streamer lifestyle"
              className="rounded-xl object-cover"
            />

          </div>

          {/* MOMENTS */}

          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">

            {moments.map((m, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group/card relative overflow-hidden rounded-2xl bg-gray-800 p-px"
              >

                <div className="rounded-[inherit] bg-gray-950">

                  <Image
                    src={m.image}
                    width={400}
                    height={250}
                    alt={m.title}
                    className="rounded-t-2xl object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-lg font-semibold text-white">
                      {m.title}
                    </h3>

                    <p className="mt-2 text-sm text-indigo-200/65">
                      {m.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </Spotlight>

          {/* BENEFITS */}

          <div className="mt-20 mx-auto max-w-4xl">

            <div className="text-center mb-10">

              <h3 className="text-2xl font-semibold text-white">
                Why Many Streamers Love This Job
              </h3>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {benefits.map((b, i) => (

                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-xl bg-gray-800 p-px"
                >

                  <div className="rounded-[inherit] bg-gray-950 p-5 flex items-center">

                    <span className="mr-3 text-indigo-400 text-xl">✓</span>

                    <p className="text-sm text-indigo-200/80">
                      {b}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-16 flex justify-center">

            <ApplyButton className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">

              Apply to Become a Streamer

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </ApplyButton>

          </div>

        </div>

      </div>

    </section>
  );
}