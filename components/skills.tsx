"use client";

import { motion } from "framer-motion";
import { Code, PaintBucket, Globe, Server, Lightbulb } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8" />,
    items: [
      "ReactJS",
      "Next.js",
      "Redux",
      "TypeScript",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "Material UI",
      "DataGridPro",
    ],
  },
  {
    category: "Backend & APIs",
    icon: <Server className="h-8 w-8" />,
    items: [
      "Node.js",
      "Express.js",
      "Postman",
      "REST APIs",
      "JSON",
      "XML",
      "Webpack",
    ],
  },
  {
    category: "Testing & Tools",
    icon: <Lightbulb className="h-8 w-8" />,
    items: ["Jest", "React Testing Library (RTL)", "Docker", "Bitbucket"],
  },
  {
    category: "CI/CD & DevOps",
    icon: <Globe className="h-8 w-8" />,
    items: ["GitHub Actions", "Jenkins", "Agile", "Jira", "Confluence"],
  },
  {
    category: "UI/UX & Design",
    icon: <PaintBucket className="h-8 w-8" />,
    items: ["Figma", "Miro"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Tech Stack
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I work with
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {skill.category}
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0">
                <ul className="grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
