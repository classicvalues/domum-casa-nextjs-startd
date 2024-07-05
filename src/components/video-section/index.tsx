// src/components/video/VideoSection.tsx

import { tw } from 'twind';

const PlayButton = () => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 transform -translate-y-1/2 -translate-x-1/2
      bg-white rounded-full font-medium group p-4 shadow-xl flex items-center justify-center
      text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out`,
    )}
    aria-label="play video"
  >
    <span className={tw(`ml-3`)}>Watch the video (5 min)</span>
    {/* You can replace the icon or add an SVG icon here if needed */}
  </button>
);

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-20 pb-24 lg:pb-32`)}>
    <div className={tw(`max-w-7xl mx-auto px-6 lg:px-8`)}>
      <div className={tw(`flex flex-col lg:flex-row items-center justify-center max-w-4xl mx-auto`)}>
        <div className={tw(`relative rounded-lg overflow-hidden shadow-2xl w-full lg:w-3/4 mx-6 lg:mx-0`)}>
          {/* Replace the iframe with your actual video player */}
          <div className={tw(`aspect-w-16 aspect-h-9`)}>
            <iframe
              className={tw(`w-full h-full object-cover`)}
              src="https://www.youtube.com/embed/your-video-id"
              title="Domum Casa Video"
              allowFullScreen
            />
          </div>
          <PlayButton />
        </div>
        <div className={tw(`mt-12 lg:mt-0 lg:ml-8 lg:w-1/4 flex items-center justify-center`)}>
          <div className={tw(`text-center`)}>
            <h2 className={tw(`text-3xl lg:text-4xl font-bold text-gray-800 mb-6`)}>
              Experience Domum Casa
            </h2>
            <p className={tw(`text-base text-gray-600`)}>
              Discover the luxury and comfort of our short and long-term rental properties in prime locations.
              Watch our video to learn more about our services and offerings.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
