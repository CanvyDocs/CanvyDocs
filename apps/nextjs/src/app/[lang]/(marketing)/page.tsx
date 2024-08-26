"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { FollowerPointerCard } from "@canvydocs/ui/following-pointer";

import { Badge } from "~/components/badge";
import FeatureRow from "~/components/feature-row";
import { FAQs } from "~/components/questions";

const Lightbox = dynamic(() => import("~/components/lightbox"));

export default function IndexPage() {
  const [open, setOpen] = useState<boolean>();

  return (
    <>
      <section className="overflow-x-hidden bg-[#fbf7ef] pt-12 sm:pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <Badge text="Star on GitHub" />
            <h1 className="font-heading text-4xl font-[500] leading-tight text-black lg:text-7xl">
              Open source <br />
              Miro alternative
            </h1>
            <h2 className="font-heading mt-4 text-2xl leading-tight text-black">
              Plan, track, collaborate on your docs on an infinite canvas
            </h2>

            <div className="relative mx-auto mt-24 max-w-2xl">
              <form
                action="https://elt.to/CanvyDocs/f/early-access"
                method="get"
                className="relative"
              >
                <div className="flex flex-col gap-4 rounded-2xl md:flex-row">
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className="font-pj block w-full rounded-2xl  border border-gray-300 bg-white px-6 py-3 text-base text-gray-900 placeholder-gray-600 caret-gray-900 focus:border-gray-900 focus:outline-none md:py-4"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-pj rounded-2xl border border-transparent bg-gray-900 px-10 py-3 text-base font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:py-4"
                  >
                    Request early access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="my-32">
          <div className="relative mx-auto">
            <div className="absolute inset-0">
              <div
                className="mx-auto h-full w-[1080px] opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>
            <FollowerPointerCard className="mx-auto max-w-[1080px]">
              <Image
                onClick={() => setOpen(true)}
                className="rounded-lg drop-shadow-lg md:mx-auto md:rounded-2xl md:drop-shadow-xl "
                src="/images/hero.webp"
                alt="CanvyDocs screenshot with flowchat, todos and google docs open"
                sizes="100vw"
                width={1080}
                height={1080}
              />
            </FollowerPointerCard>

            {open && (
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: "/images/hero.webp" }]}
              />
            )}
          </div>
        </div>
      </section>
      <FeatureRow />
      <FAQs
        params={{
          lang: "en",
        }}
        dict={{
          faq: "Commonly asked questions",
          faq_detail:
            "CanvyDocs is launching soon in a private beta. Join the waitlist to get early access.",
        }}
      />
    </>
  );
}
