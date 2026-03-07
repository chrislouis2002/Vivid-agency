"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Spotlight from "@/components/spotlight";

const streamers = [
  {
    name: "Maya",
    image: "/images/streamer1.jpg",
    earnings: 870000,
    testimonial:
      "This contract completely changed my situation. I was able to save money and support my family.",
  },
  {
    name: "Ivie",
image: "/images/streamer2.jpg",
    earnings: 1560000,
    testimonial:
      "The daily allowance helped me so much while working. The support team was amazing.",
  },
  {
    name: "Lina",
    image: "/images/streamer3.jpg",
    earnings: 920000,
    testimonial:
      "I didn't expect to earn this much in just 3 months. I'm signing another contract.",
  },
  {
    name: "Zara",
    image: "/images/streamer4.jpg",
    earnings: 810000,
    testimonial:
      "The training made it easy to start and the bonuses were very motivating.",
  },
  {
    name: "Emily",
    image: "/images/streamer5.jpg",
    earnings: 680000,
    testimonial:
      "I was nervous at first, but the training and support made everything easy. By the end of my contract, I had earned more than I expected.",
  },
  {
    name: "Lulu",
    image: "/images/streamer6.jpg",
    earnings: 1880000,
    testimonial:
      "The daily allowance really helped me stay motivated. Seeing the money come in every day made a huge difference.",
  },
  {
    name: "Ria",
    image: "/images/streamer7.jpg",
    earnings: 1050000,
    testimonial:
      "joined hoping to make some extra money, but I ended up saving enough to pay off several bills.",
  },
  {
    name: "Ada",
    image: "/images/streamer8.jpg",
    earnings: 730000,
    testimonial:
      "I didn’t realize how much opportunity there was until I finished my first contract. I’m already planning my next one.",
  },
  {
    name: "Oyinda",
    image: "/images/streamer9.jpg",
    earnings: 1350000,
    testimonial:
      "The team helped me improve quickly, and once I passed my target the bonuses added up fast.",
  },
];

const looped = [...streamers, ...streamers];

function formatCurrency(n: number) {
  return "₦" + n.toLocaleString();
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const step = value / (duration / 16);

    const interval = setInterval(() => {
      start += step;

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{formatCurrency(count)}</span>;
}

export default function IncomePotential() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScroll = useRef<any>(null);

  const startAutoScroll = () => {
    autoScroll.current = setInterval(() => {
      if (!carouselRef.current) return;

      carouselRef.current.scrollLeft += 0.6;

      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0;
      }
    }, 16);
  };

  const stopAutoScroll = () => clearInterval(autoScroll.current);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="pb-12 md:pb-20">

          {/* Header */}

          <div className="mx-auto max-w-3xl pt-20 pb-12 text-center md:pt-28 md:pb-16">

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Your Income Potential
            </h2>

            <p className="text-lg text-indigo-200/65">
              Our hosts earn through three income streams that combine
              guaranteed salary, performance bonuses, and daily allowances.
            </p>

          </div>

          {/* Income Cards */}

          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">

            {/* Salary */}

            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full rounded-[inherit] bg-gray-950 p-8">

                <span className="text-sm font-semibold text-indigo-400">
                  Income Stream 1
                </span>

                <h3 className="mt-2 mb-3 text-xl font-semibold text-white">
                  Fixed Base Salary
                </h3>

                <p className="text-indigo-200/65 mb-4">
                  Every host receives a guaranteed monthly salary while working
                  with our agency.
                </p>

                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  ₦450,000 / contract
                </div>

                <p className="text-indigo-200/65">
                  Paid every 3-month contract.
                </p>

                <div className="mt-3 text-xl font-semibold text-white">
                  ₦450,000 guaranteed
                </div>

              </div>
            </div>

            {/* Bonuses */}

            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full rounded-[inherit] bg-gray-950 p-8">

                <span className="text-sm font-semibold text-indigo-400">
                  Income Stream 2
                </span>

                <h3 className="mt-2 mb-3 text-xl font-semibold text-white">
                  Performance Bonuses
                </h3>

                <p className="text-indigo-200/65 mb-4">
                  Each host has a target during the contract period.
                </p>

                <p className="text-indigo-200/65">
                  Once your target is reached, everything you earn above the
                  target becomes your bonus.
                </p>

                <div className="mt-4 text-lg font-semibold text-indigo-300">
                  100% of extra revenue goes to you
                </div>

                <p className="mt-4 text-indigo-200/65">
                  Paid together with your salary every 3 months.
                </p>

              </div>
            </div>

            {/* Daily Allowance */}

            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full rounded-[inherit] bg-gray-950 p-8">

                <span className="text-sm font-semibold text-indigo-400">
                  Income Stream 3
                </span>

                <h3 className="mt-2 mb-3 text-xl font-semibold text-white">
                  Daily Cash Allowance
                </h3>

                <p className="text-indigo-200/65 mb-4">
                  Hosts receive daily cash allowances based on their daily
                  performance.
                </p>

                <div className="text-3xl font-bold text-green-400 mb-3">
                  10% Daily
                </div>

                <p className="text-indigo-200/65">
                  10% of everything you make that day is paid immediately for
                  daily expenses.
                </p>

              </div>
            </div>

          </Spotlight>

          {/* Testimonials */}

          <div className="mt-20 text-center">

            <h3 className="text-2xl font-semibold text-white mb-3">
              Streamers Who Completed Their Contracts
            </h3>

            <p className="text-indigo-200/65 mb-10">
              Real hosts who successfully finished their contracts and how
              much they earned.
            </p>

          </div>

          {/* Carousel */}

          <div className="relative">

            <div
              ref={carouselRef}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
              className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar py-4"
            >

              {looped.map((s, i) => (

                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[320px] rounded-2xl bg-gray-800 p-px"
                >

                  <div className="rounded-[inherit] bg-gray-950 p-6">

                    <div className="flex items-center mb-4">

                      <Image
                        src={s.image}
                        width={48}
                        height={48}
                        alt={s.name}
                        className="rounded-full mr-4"
                      />

                      <div>
                        <p className="text-white font-semibold">{s.name}</p>

                        <p className="text-green-400 text-sm">
                          Earned <AnimatedCounter value={s.earnings} />
                        </p>
                      </div>

                    </div>

                    <p className="text-indigo-200/65 text-sm">
                      “{s.testimonial}”
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Apply Button */}

          <div className="mt-16 flex justify-center">

            <a
              href="https://tally.so/r/Np7a5l"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/40"
            >

              Apply to Become a Host

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}