"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities and interesting projects.
              Let's work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:lakshyadas567@gmail.com"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    lakshyadas567@gmail.com
                  </a>
                  <a
                    href="www.linkedin.com/in/lakshyadas0910"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn
                  </a>
                 
                   
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bhopal , Madhya Pradesh
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}