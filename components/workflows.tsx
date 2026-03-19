import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="workflows">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
<div className="mx-auto max-w-3xl pt-20 pb-12 text-center md:pt-28 md:pb-20">            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              How The Job Works
            </h2>

            <p className="text-lg text-indigo-200/65">
              Becoming a professional livestream host is simple. We guide you
              through everything from account setup to earning your first
              income.
            </p>
          </div>

          {/* Floating Step Cards */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">

            {/* Step 1 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full rounded-[inherit] bg-gray-950 p-8">

                <div className="mb-3">
                  <span className="text-sm font-semibold text-indigo-400">
                    Step 1
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Create Your Streaming Account
                </h3>

                <p className="text-indigo-200/65">
                  Our team helps you create and fully set up your livestream
                  account. No experience is required and we guide you through
                  everything from the beginning.
                </p>

              </div>
            </div>

            {/* Step 2 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full rounded-[inherit] bg-gray-950 p-8">

                <div className="mb-3">
                  <span className="text-sm font-semibold text-indigo-400">
                    Step 2
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Start Livestreaming
                </h3>

                <p className="text-indigo-200/65">
                  Begin livestreaming and interacting with viewers. Our
                  managers guide you on how to attract fans and grow your
                  audience quickly.
                </p>

              </div>
            </div>

            {/* Step 3 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full rounded-[inherit] bg-gray-950 p-8">

                <div className="mb-3">
                  <span className="text-sm font-semibold text-indigo-400">
                    Step 3
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Earn Salary and Bonuses
                </h3>

                <p className="text-indigo-200/65">
                  Earn a stable monthly income plus performance bonuses from
                  gifts, loyal fans and platform rewards as your audience
                  grows.
                </p>

              </div>
            </div>

          </Spotlight>

        </div>
      </div>
    </section>
  );
}