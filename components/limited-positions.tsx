"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ApplyPopup from "@/components/ApplyPopup";

export default function LimitedPositions() {

  const [open, setOpen] = useState(false);

  return (

    <section className="py-5 md:py-2">

      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}

        <div className="text-center mb-12">

          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Limited Streamer Positions Available
          </h2>

          <p className="text-lg text-indigo-200/65 max-w-2xl mx-auto">
            We only accept a small number of new hosts each contract period to
            ensure every streamer receives proper support and guidance from
            our team.
          </p>

        </div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gray-800 p-px"
        >

          <div className="rounded-[inherit] bg-gray-950 p-10 text-center">

            <div className="mb-6">

              <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                Current Intake
              </span>

            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              Applications Are Open For The Next Contract
            </h3>

            <p className="text-indigo-200/65 max-w-xl mx-auto mb-8">
              Our agency limits how many hosts we onboard each contract period.
              Once these positions are filled, applications will close until
              the next intake.
            </p>

            {/* Apply Button */}

            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400"
            >
              Apply Now

              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-sm text-indigo-200/50 mt-6">
              Applications usually fill quickly each contract period.
            </p>

          </div>

        </motion.div>

      </div>

      {/* Global Apply Popup */}

      <ApplyPopup open={open} setOpen={setOpen} />

    </section>
  );
}
