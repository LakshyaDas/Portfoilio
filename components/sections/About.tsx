"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Coding workspace"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            "I’m Lakshya Kumar Das, a passionate frontend developer with a keen eye for design and a strong foundation in modern web technologies. I specialize in crafting responsive, performant, and accessible web applications that deliver exceptional user experiences."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">1+ Years</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Professional Experience
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">5+ Projects</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}