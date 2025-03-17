"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Results-driven Front-End Developer with 6+ years of experience
                building scalable and high-performance web applications. Adept
                at optimizing UI performance, refactoring legacy code, and
                enhancing user experience.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Strong expertise in React, Next.js, TypeScript, and UI
                frameworks. Passionate about writing clean, maintainable code
                and collaborating with cross-functional teams to drive product
                excellence.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          >
            {/* <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-xl"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
