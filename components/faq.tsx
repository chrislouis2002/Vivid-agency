"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much can I realistically earn?",
    answer:
      "Every host receives a guaranteed base salary of ₦150,000 per month. Contracts run for 3 months, meaning ₦450,000 guaranteed per contract. Many hosts also earn additional bonuses once they exceed their targets."
  },
  {
    question: "How is the salary paid?",
    answer:
      "Base salary is paid at the end of each 3-month contract. This totals ₦450,000 guaranteed for every completed contract."
  },
  {
    question: "What are performance targets?",
    answer:
      "Each host has a performance target during the contract. Once that target is reached, any additional revenue generated becomes your personal bonus."
  },
  {
    question: "When do I receive my bonuses?",
    answer:
      "Bonuses are paid together with your base salary at the end of the 3-month contract period."
  },
  {
    question: "What is the daily allowance?",
    answer:
      "Hosts receive a daily allowance equal to 10% of whatever they earn that day. This allowance is paid immediately each day for daily expenses."
  },
  {
    question: "What do streamers actually do during their shifts?",
    answer:
      "Streamers primarily interact with customers through private one-on-one video calls. Customers pay for your time and attention. The video call can range from sexy dancing,twerkking, stripping, fake masturbation and fake orgasms in order to make the customer satisfied . You are always in control of what you choose to do during the call."
  },
  {
    question: "Do i have to show my face During the sex video call?",
    answer:
      "No you do not have to show your face during the video calls. We understand that privacy is important, and you can choose to keep your face hidden if you prefer. Many hosts use creative ways to maintain their anonymity while still providing an engaging experience for customers."
  },
  {
    question: "Do i Provide what i need?",
    answer:
      "All you need is provided for you including streaming devices and equiment, Anonymous account to receive payments, annonymous streaming accounts and anonymous whatsapp numbers. Your safety and comfort are our top priorities, so we ensure you have everything you need to succeed without any personal risk or investment on your part."
  },
  {
    question: "Is the work physical or in-person?",
    answer:
      "No. All interactions happen virtually online through video calls. You will never meet customers in person. Everything is done remotely from the accommodation we provide for you."
  },
  {
    question: "Do I need experience?",
    answer:
      "No previous experience is required. We provide guidance, training and support to help new hosts get started and improve their performance."
  },
//   {
//     question: "Is training provided?",
//     answer:
//       "Yes. All new hosts receive onboarding and guidance so they can start confidently and understand how to maximize their earnings."
//   },
  {
    question: "How long is the contract?",
    answer:
      "Each contract lasts 3 months. After completing a contract, hosts can choose to renew and continue working with the agency."
  },
  {
    question: "Can I renew my contract?",
    answer:
      "Yes. Many hosts choose to renew their contracts after seeing their results during the first contract period."
  },
  {
    question: "How do I apply?",
    answer:
      "You can apply by clicking the Apply button on this page and filling out the short application form. Our team will review your application and contact you with the next steps."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28">

      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-indigo-200/65">
            Here are answers to the most common questions about working with our agency.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl bg-gray-800 p-px"
            >

              <div className="rounded-[inherit] bg-gray-950">

                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-white font-medium">
                    {faq.question}
                  </span>

                  <span className="text-indigo-400">
                    {open === index ? "−" : "+"}
                  </span>

                </button>

                {open === index && (

                  <div className="px-6 pb-6 text-indigo-200/70 text-sm">
                    {faq.answer}
                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}