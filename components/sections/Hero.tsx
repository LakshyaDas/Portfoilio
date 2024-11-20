"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-black" />
  ),
});

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = "Lakshya";
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 150); // Adjust speed as needed

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="relative h-screen w-full">
      {/* Background Scene */}
      <Scene />

      {/* Content Section */}
      <div className="container h-full flex flex-col justify-center items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name with Typewriter Animation */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight">
            {displayedText}
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200 tracking-wide">
            Software Developer
          </h2>

          {/* Short Introduction */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            I design and build responsive, performant, and accessible web
            applications, delivering user-centric solutions with modern
            technologies.
          </p>

          {/* Call-to-Action Button */}
          <Button
            size="lg"
            className="rounded-full "
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore My Work <ArrowDown className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
