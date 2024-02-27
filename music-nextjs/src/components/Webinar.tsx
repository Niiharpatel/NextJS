"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function Webinar() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum totam cumque dicta accusantium? Eos, vitae?",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Mastering Guitar Techniques",
      description:
        "Explore the intricacies of guitar playing, from fingerpicking to advanced soloing. Elevate your skills and unleash your musical potential.",
      slug: "mastering-guitar-techniques",
      isFeatured: false,
    },
    {
      title: "Harmony in Jazz",
      description:
        "Dive into the world of jazz harmony, learning chord progressions, improvisation techniques, and the art of creating rich musical landscapes.",
      slug: "harmony-in-jazz",
      isFeatured: true,
    },
    {
      title: "Songwriting Essentials",
      description:
        "Unleash your creativity by mastering the art of songwriting. Learn to compose memorable melodies and lyrics that resonate with your audience.",
      slug: "songwriting-essentials",
      isFeatured: false,
    },
    {
      title: "Exploring Electronic Music Production",
      description:
        "Delve into the realm of electronic music production, from synthesizer basics to advanced sound design. Create your unique sonic palette.",
      slug: "electronic-music-production-exploration",
      isFeatured: true,
    },
    {
      title: "Songwriting Essentials",
      description:
        "Unleash your creativity by mastering the art of songwriting. Learn to compose memorable melodies and lyrics that resonate with your audience.",
      slug: "songwriting-essentials",
      isFeatured: false,
    },
  ];
  return (
    <>
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10">
            <HoverEffect
              items={featuredWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: "/",
              }))}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webinar;
