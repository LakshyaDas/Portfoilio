"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Palette,
  Laptop,
  Boxes,
  Database,
  GitBranch,
  Code,
} from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    name: "C++,Javascript",
    icon: Code,
    color: "text-purple-500",
  },
  {
    name: "Responsive Design",
    icon: Laptop,
    color: "text-green-500",
  },
  {
    name: "Data Structures And Algorithm",
    icon: Boxes,
    color: "text-yellow-500",
  },
  {
    name: "Backend Integration",
    icon: Database,
    color: "text-red-500",
  },
  {
    name: "Version Control",
    icon: GitBranch,
    color: "text-cyan-500",
  },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with a variety of modern technologies and frameworks to create
            exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
                <h3 className="font-semibold">{skill.name}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}