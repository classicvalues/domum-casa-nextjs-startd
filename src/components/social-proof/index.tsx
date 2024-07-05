// src/components/socialproof/SocialProof.tsx

import { useState } from 'react';
import { tw } from 'twind';
import Image from 'next/image';

const socialProofs = [
  {
    name: `John Doe`,
    company: `Alphabet Inc.`,
    image: `/images/social-1.webp`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    image: `/images/social-2.webp`,
    text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw`container mx-auto my-8`}>
      <div className={tw`max-w-3xl mx-auto`}>
        <section>
          <figure className={tw`relative bg-white rounded-lg shadow-lg p-8`}>
            <p className={tw`text-gray-600 text-lg pb-6`}>{socialProofs[currentIndex].text}</p>
            <div className={tw`flex items-center justify-between`}>
              <div className={tw`flex items-center`}>
                <div className={tw`h-12 w-12 rounded-full overflow-hidden relative`}>
                  <Image
                    src={socialProofs[currentIndex].image}
                    alt={`${socialProofs[currentIndex].name} - ${socialProofs[currentIndex].company}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={tw`ml-4`}>
                  <p className={tw`text-gray-800 font-bold`}>{socialProofs[currentIndex].name}</p>
                  <p className={tw`text-gray-600 text-sm`}>{socialProofs[currentIndex].company}</p>
                </div>
              </div>
              <div className={tw`flex items-center space-x-4`}>
                <button
                  className={tw`rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition duration-300`}
                  onClick={previous}
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={tw`h-6 w-6 text-gray-600`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className={tw`rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition duration-300`}
                  onClick={next}
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={tw`h-6 w-6 text-gray-600`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
