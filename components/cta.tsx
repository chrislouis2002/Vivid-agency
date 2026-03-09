import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">

            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Start Your Journey as a Live Streamer Today
            </h2>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4">

              {/* Apply Button */}
              <div data-aos="fade-up" data-aos-delay={200}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:from-indigo-500 hover:to-indigo-400 sm:mb-0 sm:w-auto"
                  href="https://tally.so/r/Np7a5l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Apply Now
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={200}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-blue-800 to-blue-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:from-indigo-500 hover:to-indigo-400 sm:mb-0 sm:w-auto"
                 href="/#faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Frequently Asked Questions
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </div>

              {/* WhatsApp Button */}
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group flex items-center justify-center w-full bg-[#25D366] text-white hover:bg-[#20b858] sm:w-auto"
                  href="https://wa.me/2349137385418"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">

                    {/* WhatsApp Icon */}
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.38 0 .01 5.37 0 12c0 2.12.56 4.19 1.63 6.01L0 24l6.16-1.61A11.94 11.94 0 0012 24h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.52zM12 21.82c-1.8 0-3.55-.48-5.08-1.38l-.36-.21-3.66.96.98-3.56-.23-.37A9.78 9.78 0 012.22 12C2.22 6.59 6.59 2.22 12 2.22c2.61 0 5.06 1.02 6.9 2.86A9.73 9.73 0 0121.78 12c0 5.41-4.37 9.82-9.78 9.82zm5.39-7.35c-.29-.14-1.72-.85-1.99-.94-.27-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.14-1.21-.44-2.31-1.4-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.14-.14.29-.36.43-.54.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.9-2.14-.24-.58-.48-.5-.65-.51l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44.01 1.44 1.04 2.83 1.19 3.03.14.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.62.69.22 1.31.19 1.81.11.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" />
                    </svg>

                    Chat with an Admin
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}