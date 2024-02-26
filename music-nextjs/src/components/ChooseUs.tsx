"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function ChooseUs() {
  const content = [
    {
      title: "Collaborative Music Creation",
      description:
        "Compose and produce music collaboratively in real time with your band, fellow musicians, and creative partners. Collaborate on musical pieces, share ideas, and make artistic decisions swiftly. With our platform, you can streamline your music creation process and enhance collaborative productivity. Whether you're working on a new track or refining existing compositions, our tools empower you to create harmonious melodies and rhythms seamlessly.",
    },

    {
      title: "Live Jam Sessions",
      description:
        "Experience the thrill of live jam sessions with your bandmates and fellow musicians. Collaborate on musical improvisations, share creative ideas, and make spontaneous decisions in real time. Our platform enables seamless communication and synchronization, allowing you to capture the magic of the moment. Whether you're creating new tunes or experimenting with different sounds, our tools provide a dynamic and collaborative environment for musicians to connect and create together.",
    },
    {
      title: "Interactive Songwriting",
      description:
        "Engage in interactive songwriting sessions with your songwriting partners and collaborators. Compose lyrics, craft melodies, and fine-tune arrangements together in real time. Our platform fosters a creative space where ideas flow effortlessly, and decisions are made collaboratively. Enhance your songwriting process, whether you're penning down new lyrics or refining existing ones, with our innovative tools designed to inspire and facilitate collaboration.",
    },
    {
      title: "Virtual Music Production Studio",
      description:
        "Transform your creative space into a virtual music production studio where artists and producers can collaborate seamlessly. Produce tracks, mix beats, and experiment with sounds in real time. With our platform, distance is no longer a barrier to collaboration. Connect with artists from around the world, share your expertise, and collectively produce high-quality music. Elevate your music production experience with our collaborative tools designed for the modern virtual studio environment.",
    },
  ];

  return (
    <>
      <div>
        <StickyScroll content={content} />
      </div>
    </>
  );
}

export default ChooseUs;
