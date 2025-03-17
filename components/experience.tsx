"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Freelance Front-End Developer",
    company: "ecogenie biotech",
    location: "Remote",
    date: "June 2024 - Present",
    description:
      "Developed and integrated e-commerce features, including product listings, cart management, checkout, and payment gateway, using React, Next.js, and Tailwind CSS. Optimized application performance, debugged critical issues, and refactored code to improve maintainability and stability.",
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer",
    company: "IneoQuest (A Telestream Company)",
    location: "Waterloo, ON",
    date: "Nov 2022 - Nov 2023",
    description:
      "Led dashboard suite development for audio-video monitoring solutions, improving UI responsiveness. Refactored 8,000+ lines of code into modular components, increasing maintainability by 40%. Integrated local API services with front-end using Docker, enhancing deployment efficiency.",
  },
  {
    id: 3,
    type: "work",
    title: "Software Developer",
    company: "HP (Print Platforms and Operations)",
    location: "Waterloo, ON",
    date: "Feb 2022 - Oct 2022",
    description:
      "Developed a checkout micro frontend enabling seamless cart and payment flow with optional authentication. Implemented data analytics tracking, processing insights via Kibana for business intelligence. Integrated reusable micro frontends (MFEs), reducing development time by 30%.",
  },
  {
    id: 4,
    type: "work",
    title: "Software Developer",
    company: "Ford",
    location: "Waterloo, ON",
    date: "2020 - 2022",
    description:
      "Developed tablet console interface for the Ford Mustang dashboard using React. Designed and implemented a media console with sliders for volume control. Optimized bundle size, reducing load time by 35% using Webpack tree shaking. Evaluated Preact as a lightweight React alternative, improving performance in specific use cases.",
  },
  {
    id: 5,
    type: "work",
    title: "Software Developer",
    company: "GE",
    location: "Bengaluru, India",
    date: "2017 - 2020",
    description:
      "Built front-end applications for predictive maintenance of locomotives, saving $2M in oil waste reduction. Upgraded shopping cart workflow from legacy JSP to microservices using React, reducing ordering effort by 10x.",
  },
  {
    id: 6,
    type: "education",
    title: "Bachelor of Engineering (Computer Science)",
    company: "VTU",
    location: "Bengaluru, India",
    date: "Completed",
    description: "",
  },
  {
    id: 7,
    type: "education",
    title: "Advanced Diploma in Information Technology",
    company: "University of Mysore",
    location: "Mysore, India",
    date: "Completed",
    description: "",
  },
  {
    id: 8,
    type: "education",
    title: "Secure Coding Software Applications",
    company: "University of Waterloo",
    location: "Waterloo, ON",
    date: "Completed",
    description: "",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience & Education
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <div className="relative ml-4 border-l border-muted-foreground/20 pl-10 md:ml-12 md:pl-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-10 last:mb-0"
              >
                <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-muted-foreground/20 bg-background flex items-center justify-center md:-left-12">
                  {experience.type === "work" ? (
                    <Briefcase className="h-4 w-4" />
                  ) : (
                    <GraduationCap className="h-4 w-4" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {experience.date}
                    </span>
                  </div>
                  <div className="text-muted-foreground">
                    {experience.company} • {experience.location}
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
