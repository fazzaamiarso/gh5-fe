"use client";
import React from "react";
import { Spotlight } from "./Spotlight";
import { StickyScroll } from "./scroll-reveral";
import { ContainerScroll } from "./container-anima";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "./card";

export default function SpotlightPreview() {
  return (
    <div className="h-screen">
      <section className="mx-6 flex justify-between">
        <div>
          <Image
            alt="justify"
            width={180}
            height={170}
            src="https://imgtr.ee/images/2024/07/12/2684491883bd19583eedf96a1aaf0c34.png"
          />
        </div>
        <div className="mt-4">
          <Button className="bg-indigo-600">Signin</Button>
        </div>
      </section>
      <section className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover bg-center pt-8 lg:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-4 flex w-60 items-center justify-between rounded-full border border-indigo-600 p-1">
            <span className="font-inter ml-3 text-xs font-medium text-gray-900">
              Lorem ipsum dolor sit amet.
            </span>
            <a
              href="javascript:;"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600"
            >
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <h1 className="font-manrope mx-auto mb-5 max-w-2xl text-center text-4xl font-bold leading-[50px] text-gray-900 md:text-5xl">
            Justify
            <span className="ml-2 text-indigo-600">law lay lay layy </span>
          </h1>
          <p className="mx-auto mb-9 max-w-2xl text-center text-base font-normal leading-7 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            ipsum ullam animi perspiciatis tempora, ab illo deserunt, amet cum,
            delectus atque voluptatum et? Quaerat dolore fugiat est maiores,
            soluta veritatis.
          </p>
          <Button className="shadow-xs h-17 mb-14 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700 md:w-auto">
            Create an account
            <svg
              className="ml-2"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <div className="flex justify-center">
            <img
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard image"
            />
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="bg-opacitflex absolute relative flex justify-start bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            for lawyer
          </h1>
          <HoverEffect className="max-w-7xl" items={lawyer} />
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="bg-opacitflex absolute relative flex justify-start bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            for cityzen
          </h1>
          <HoverEffect className="max-w-7xl" items={cityzen} />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-3">
          <div className="border-2 border-black">
            <h1>Total lawyers</h1>
            <p>1000 lawyers</p>
          </div>
          <div className="border-2 border-black">
            <h1>Total lawyers</h1>
            <p>1000 lawyers</p>
          </div>
          <div className="border-2 border-black">
            <h1>Total lawyers</h1>
            <p>1000 lawyers</p>
          </div>
          <div className="border-2 border-black">
            <h1>Total lawyers</h1>
            <p>1000 lawyers</p>
            <div className="a h-20 w-20 rounded-full border-2 border-[10px] border-b-green-500 border-l-green-500 border-r-transparent border-t-transparent"></div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl justify-center justify-between p-7">
          <h1 className="text-lg font-semibold">Made with 💖</h1>
          <h1 className="text-lg font-semibold">Justify ©️</h1>
        </div>
      </section>
    </div>
  );
}

const lawyer = [
  {
    title: "Step 1",
    description: "A technologsssssaaa.",
    link: "https://stripe.com",
  },
  {
    title: "Step 2",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Step 3",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Step 4",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "setep 5",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "step 5",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export const cityzen = [
  {
    title: "Step 1",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Step 2",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Step 3",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Step 4",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "setep 5",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "step 5",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
