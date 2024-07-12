"use client";
import React from "react";

import Image from "next/image";
import { HoverEffect } from "./card";
import Link from "next/link";

const lawyer = [
  {
    title: "Accept cases submitted by users",
    description:
      "- Can accept cases submitted by Users: Lawyers can review and accept cases submitted by users, allowing them to start working on those cases.",
  },
  {
    title: "Update case status, upload related documents",
    description:
      "Lawyers can update the case status and upload related documents, ensuring that all relevant information is easily accessible to all involved parties.",
  },
  {
    title: "Contribute to cases",
    description:
      "If there is an ongoing case that interests them, lawyers may ask to contribute to the case to the uploader.",
  },
  {
    title: "Portfolio update",
    description:
      "Lawyers can build their professional portfolios by showcasing the cases they have resolved.",
  },
  {
    title: "Public Case Posting",
    description:
      "- Lawyers can post cases publicly, inviting other lawyers to collaborate.",
  },
];

const cityzen = [
  {
    title: "View cases",
    description:
      "Users can view the cases they have submitted or other relevant cases, giving them direct access to important information",
  },
  {
    title: "Chat to request cases to lawyers",
    description:
      "Users can request cases to lawyers through the chat feature, making the initial communication and explanation of their issues easier.",
  },
  {
    title: "Upvote to elevate cases",
    description:
      "Users can upvote specific cases, which can help increase the visibility and priority of those cases among others.",
  },
  {
    title: "User-Lawyer Matching",
    description:
      "- Users can search for and message lawyers suitable for their case..",
  },
];

export default function SpotlightPreview() {
  return (
    <div className="container h-screen">
      <section className="mx-6 flex justify-between">
        <div>
          <Image alt="justify" width={70} height={70} src="/justify-logo.png" />
        </div>
        <div className="mt-4">
          <Link
            href="/login"
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white"
          >
            Login
          </Link>
        </div>
      </section>
      <section className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover bg-center pt-8 lg:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-manrope mx-auto mb-5 max-w-2xl text-center text-4xl font-bold leading-[50px] text-gray-900 md:text-5xl">
            Justify
            <span className="ml-2 text-indigo-600">- Legal Assistance</span>
          </h1>
          <p className="mx-auto mb-9 max-w-3xl text-center text-xl font-normal font-semibold leading-7 text-gray-500">
            Empowering Justice, Enabling Growth
          </p>
          <Link
            href="/register"
            className="shadow-xs h-17 mb-14 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700 md:w-auto"
          >
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
          </Link>
          <div className="flex justify-center">
            <img src="/namex.png" alt="Dashboard image" />
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="bg-opacitflex relative flex justify-start bg-clip-text text-4xl font-bold text-indigo-400 md:text-7xl">
            👨‍⚖️ Lawyer
          </h1>
          <HoverEffect className="max-w-7xl" items={lawyer} />
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="bg-opacitflex relative flex justify-start bg-clip-text text-4xl font-bold text-indigo-400 md:text-7xl">
            👱 Citizen
          </h1>
          <HoverEffect className="max-w-7xl" items={cityzen} />
        </div>

        <div className="mx-auto flex max-w-7xl justify-center justify-between p-7">
          <h1 className="text-lg font-semibold">Made with 💖 and 🔥</h1>
          <h1 className="text-lg font-semibold">Justify ©️</h1>
        </div>
      </section>
    </div>
  );
}
