import React from "react";
import Image from "next/image";

function FeatureRowRTL() {
  return (
    <section className="mb-12 bg-[#faf7dc] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:items-center md:gap-x-16">
          <div>
            <Image
              className="rounded-lg drop-shadow-lg md:mx-auto md:rounded-2xl md:drop-shadow-xl "
              src="/images/edit-bg-transparent.webp"
              alt="CanvyDocs features: edit, sync, collaborate"
              sizes="100vw"
              width={1080}
              height={1080}
            />
          </div>

          <div className="text-center md:text-left lg:pr-16">
            <h3 className="font-heading text-4xl font-[500] leading-tight text-black lg:text-7xl">
              Work with your docs on an infinite canvas.
            </h3>
            <p className="font-pj mt-4 text-lg text-gray-700 sm:mt-8">
              See the bigger picture easier with all your docs on one tab. Sync
              with Google / Word Docs or your Notion workspace.
            </p>

            <a
              href="https://"
              title=""
              className="font-pj mt-8 inline-flex items-center font-bold text-gray-900"
            >
              Request early access
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureRowRTL;
