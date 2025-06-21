"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
const TEXT_PRIMARY = "text-white";
const TEXT_SECONDARY = "text-gray-300";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = ["MLOps Engineer", "DevOps Engineer", "Software Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      textElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      charIndex += isDeleting ? -1 : 1;
      typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* You can add a background video or image here */}
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-6">
          <img
            src="/Profile picture.png"
            alt="Ahmad Salah"
            className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Ahmad Salah</h1>
        <h2 className="text-2xl md:text-4xl mb-6">
          I'm a{" "}
          <span
            ref={textRef}
            className="text-purple-400"
          ></span>
        </h2>
        <p className={`max-w-2xl mx-auto mb-8 ${TEXT_SECONDARY}`}>
          From Damascus to Germany, my journey has been one of resilience and
          growth. Now an MLOps Engineer, I specialize in building scalable and
          automated machine learning systems.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#contact" passHref>
            <button
              className={`${PRIMARY_GRADIENT} ${TEXT_PRIMARY} font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105`}
            >
              Get in Touch
            </button>
          </Link>
          <Link href="#projects" passHref>
            <button
              className={`${SECONDARY_BG} ${TEXT_PRIMARY} font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105`}
            >
              View My Work
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" passHref>
          <ArrowDown className="w-8 h-8 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
