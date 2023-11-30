"use client";

import { useRouter } from "next/navigation";

export default function Prices() {
  const router = useRouter();

  const goToWaitList = (plan: "free" | "monthly" | "annual") => {
    router.push(`/waitlist?plan=${plan}`);
  };

  return (
    <section id="plans" className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing plans
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Work on real projects, learn key skills, and adapt to shifting IA
            requirements, just like in the real world!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden transition-all motion-safe:hover:scale-110">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Starter plan
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                <span>$0</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to free projects and challenges.
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to public Discord channel.
              </p>
              <button
                className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-500 rounded button-primary"
                onClick={() => goToWaitList("free")}
              >
                Start now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden transition-all motion-safe:hover:scale-110">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Monthly plan
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                <span>$20</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to continuously updating projects and challenges.
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                IA assistance features.
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to private Discord channel.
              </p>
              <button
                className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-500 rounded button-primary"
                onClick={() => goToWaitList("monthly")}
              >
                Buy now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden transition-all motion-safe:hover:scale-110">
              <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Annual plan
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$10</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to continuously updating projects and challenges.
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                IA assistance features.
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to private Discord channel.
              </p>

              <button
                className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded button-secondary"
                onClick={() => goToWaitList("annual")}
              >
                Buy now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
