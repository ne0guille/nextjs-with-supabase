import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faListCheck,
  faLaptopCode,
  faDoorOpen,
  faRoadBarrier,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  const url = "https://player.vimeo.com/video/889714564?h=13cd549e2a";

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            How it works
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 mb-8">
            To complete a challenge, you'll need to follow some steps. We'll be
            there to help you along the way.
          </p>

          <div className="h_iframe">
            <iframe
              src={url}
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Split & Estimate
              </h2>
              <p className="leading-relaxed text-base">
                Once you've scoped out the challenge, chop it into smaller bits
                and guess-timate for a smoother plan.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <FontAwesomeIcon className="w-4 h-4" icon={faGlasses} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Analyze
              </h2>
              <p className="leading-relaxed text-base">
                Get the code before you dive in. Look out for spots where you'll
                need to make changes.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <FontAwesomeIcon className="w-4 h-4" icon={faListCheck} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Quiz
              </h2>
              <p className="leading-relaxed text-base">
                We'll throw a few questions your way to see if you're following
                the code
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <FontAwesomeIcon className="w-4 h-4" icon={faLaptopCode} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Code
              </h2>
              <p className="leading-relaxed text-base">
                Time to code! We'll give you a starting point. You'll need to do
                the rest. You can use any language you like.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <FontAwesomeIcon className="w-4 h-4" icon={faRoadBarrier} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Got stuck?
              </h2>
              <p className="leading-relaxed text-base">
                If you're stuck, we've got your back! We'll give you hints and
                tips to get you back in the game{" "}
              </p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <FontAwesomeIcon className="w-4 h-4" icon={faDoorOpen} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Done? you sure?
              </h2>
              <p className="leading-relaxed text-base">
                Hey, in the real world, work keeps coming! AI jumps in with new
                ideas. Your call whether you wanna roll with 'em or not!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
