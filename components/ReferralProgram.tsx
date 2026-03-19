"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ApplyButton from "@/components/ApplyButton";

export default function ReferralSection() {

  const [copied, setCopied] = useState(false);

  const referralLink = "https://vivid-agency.vercel.app/"; // replace with your real link

  function copyLink() {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareWhatsApp() {
    const text = `Earn ₦30,000 per referral with this opportunity. Apply here: ${referralLink}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <section id="ReferralProgram">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="py-20 md:py-28">

          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center mb-16">

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Earn ₦30,000 Per Referral
            </h2>

            <p className="text-lg text-indigo-200/65">
              Invite friends and get paid when they start working.
            </p>

          </div>

          {/* BIG MONEY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-gray-800 p-px mb-12"
          >

            <div className="rounded-[inherit] bg-gray-950 p-10 text-center">

              <p className="text-sm text-indigo-300 mb-2">
                Referral Reward
              </p>

              <div className="text-5xl font-bold text-green-400 mb-4">
                ₦30,000
              </div>

              <p className="text-indigo-200/65">
                Get paid instantly when your referral starts working.
              </p>

              {/* SOCIAL PROOF */}
              <p className="mt-4 text-sm text-green-300">
                Top referrers are earning ₦150,000+ monthly
              </p>

            </div>

          </motion.div>

          {/* HOW IT WORKS */}
          <div className="grid gap-5 md:grid-cols-3 mb-12">

            {[
              {
                step: "1",
                title: "Share Your Link",
                desc: "Send your referral link to friends or post online."
              },
              {
                step: "2",
                title: "They Apply & Join",
                desc: "They complete application and get accepted."
              },
              {
                step: "3",
                title: "You Get Paid",
                desc: "You earn ₦30,000 when they start working."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gray-800 p-px">
                <div className="rounded-[inherit] bg-gray-950 p-6 text-center">

                  <div className="text-2xl font-bold text-indigo-400 mb-2">
                    {item.step}
                  </div>

                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-indigo-200/65 text-sm">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>

          {/* ACTION AREA */}
          <div className="mx-auto max-w-xl text-center mb-12">

            <p className="text-indigo-200/65 mb-6">
              Start sharing now — there is no limit to how much you can earn.
            </p>

            {/* COPY LINK */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">

              <button
                onClick={copyLink}
                className="px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition"
              >
                {copied ? "Copied ✓" : "Copy Referral Link"}
              </button>

              <button
                onClick={shareWhatsApp}
                className="px-5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20b858] transition"
              >
                Share on WhatsApp
              </button>

            </div>

          </div>

          {/* CTA */}
          <div className="flex justify-center">

            <ApplyButton className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400">

              Start Earning Now

              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>

            </ApplyButton>

          </div>

        </div>

      </div>
    </section>
  );
}