import Image from "next/image";
const blurredShapeGray = "/images/blurred-shape-gray.svg";
const blurredShape = "/images/blurred-shape.svg";

const benefits = [
  {
    icon: "🏠",
    title: "Free Accommodation",
    description:
      "Comfortable housing provided so you can focus entirely on your work without worrying about rent or living costs.",
  },
  {
    icon: "📱",
    title: "Devices & High-Speed Internet",
    description:
      "Professional devices and fast, reliable internet ensure smooth streaming with zero technical stress.",
  },
  {
    icon: "🎥",
    title: "Professional Streaming Setup",
    description:
      "Work in a fully prepared streaming environment designed to help you look professional and attract viewers.",
  },
  {
    icon: "💰",
    title: "Competitive Contract Earnings",
    description:
      "Transparent contracts with competitive payouts so your effort directly translates into income.",
  },
  {
    icon: "📈",
    title: "Performance Bonuses",
    description:
      "Unlock additional rewards and bonuses as you grow your audience and reach performance milestones.",
  },
  {
    icon: "🤝",
    title: "Training & Ongoing Support",
    description:
      "Full onboarding and continuous coaching from our team to help you grow confidently and succeed faster.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background blur shapes */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2">
        <Image
          src={blurredShapeGray}
          width={760}
          height={668}
          alt=""
          className="max-w-none"
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50">
        <Image
          src={blurredShape}
          width={760}
          height={668}
          alt=""
          className="max-w-none"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-16 md:py-24 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">

          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center pb-12 md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Benefits
              </span>
            </div>

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Everything You Need To Succeed
            </h2>

            <p className="text-lg text-indigo-200/65">
              We remove the common barriers so you can focus on building your
              audience, growing your presence, and maximizing your income.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 md:gap-x-14 md:gap-y-16">

            {benefits.map((benefit, index) => (
              <article
                key={index}
                className="group transition duration-300"
              >
                <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>

                <h3 className="mb-2 font-nacelle text-base font-semibold text-gray-200">
                  {benefit.title}
                </h3>

                <p className="text-indigo-200/65">
                  {benefit.description}
                </p>
              </article>
            ))}

          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center text-sm text-indigo-200/60">
            <p>
              Supporting creators worldwide • Professional environment • Built
              for long-term success
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}