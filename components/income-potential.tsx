"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import ApplyButton from "@/components/ApplyButton";

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
      "I was nervous at first, but the training and support made everything easy.",
  },
  {
    name: "Lulu",
    image: "/images/streamer6.jpg",
    earnings: 1880000,
    testimonial:
      "The daily allowance really helped me stay motivated.",
  },
  {
    name: "Ria",
    image: "/images/streamer7.jpg",
    earnings: 1050000,
    testimonial:
      "I joined hoping to make extra money and paid off several bills.",
  },
  {
    name: "Ada",
    image: "/images/streamer8.jpg",
    earnings: 730000,
    testimonial:
      "I’m already planning my next contract.",
  },
  {
    name: "Oyinda",
    image: "/images/streamer9.jpg",
    earnings: 1350000,
    testimonial:
      "Once I passed my target the bonuses added up fast.",
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
    <section id="income-potential" className="">

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="pb-12 md:pb-20">

          {/* HEADER */}

          <div className="mx-auto max-w-3xl pt-15 pb-12 text-center md:pt-28 md:pb-16">

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Your Income Potential
            </h2>

            <p className="text-lg text-indigo-200/65">
              Our hosts earn through three income streams that combine guaranteed salary, bonuses, and daily allowances.
            </p>

          </div>

          {/* INCOME CARDS (FIXED HEIGHT) */}

          <Spotlight className="group mx-auto grid max-w-sm items-stretch gap-6 lg:max-w-none lg:grid-cols-3">

            {[ 
              {
                title: "Fixed Base Salary",
                desc: "Guaranteed monthly income during your contract.",
                highlight: "₦500,000 / contract",
                extra: "Paid every 3 months",
              },
              {
                title: "Performance Bonuses",
                desc: "Everything above your target becomes your bonus.",
                highlight: "100% bonus earnings",
                extra: "Unlimited upside",
              },
              {
                title: "Daily Allowance",
                desc: "Earn daily cash from your performance.",
                highlight: "10% Daily",
                extra: "Instant payouts",
              },
            ].map((card, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group/card relative flex h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              >

                <div className="flex flex-col justify-between w-full h-full rounded-[inherit] bg-gray-950 p-8">

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {card.title}
                    </h3>

                    <p className="text-indigo-200/65 mb-4">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-indigo-400 mb-2">
                      {card.highlight}
                    </div>

                    <p className="text-indigo-200/65">
                      {card.extra}
                    </p>
                  </div>

                </div>

              </motion.div>

            ))}

          </Spotlight>

          {/* TESTIMONIALS */}

          <div className="mt-20 text-center">

            <h3 className="text-2xl font-semibold text-white mb-3">
              Streamers Who Completed Their Contracts
            </h3>

            <p className="text-indigo-200/65 mb-10">
              Real results from real hosts.
            </p>

          </div>

          {/* CAROUSEL (FIXED HEIGHT CARDS) */}

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
                  className="min-w-[320px] flex h-[220px] rounded-2xl bg-gray-800 p-px"
                >

                  <div className="flex flex-col justify-between w-full h-full rounded-[inherit] bg-gray-950 p-6">

                    <div className="flex items-center mb-3">

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

                    <p className="text-indigo-200/65 text-sm line-clamp-3">
                      “{s.testimonial}”
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-16 flex justify-center">

            <ApplyButton className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">

              Apply to Become a Host

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