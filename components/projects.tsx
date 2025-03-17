"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Developed a full-featured e-commerce platform with product listings, cart management, checkout, and payment gateway integration for ecogenie biotech.",
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
    tags: ["Next.js", "React", "Tailwind CSS", "Payment Gateway"],
  },
  {
    id: 2,
    title: "Audio-Video Monitoring Dashboard",
    description:
      "Led the development of a dashboard suite for audio-video monitoring solutions at IneoQuest, improving UI responsiveness and maintainability.",
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
    tags: ["React", "TypeScript", "Docker", "Dashboard"],
  },
  {
    id: 3,
    title: "Checkout Micro Frontend",
    description:
      "Developed a checkout micro frontend for HP enabling seamless cart and payment flow with optional authentication and data analytics tracking.",
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
    tags: ["React", "Micro Frontend", "Kibana", "Analytics"],
  },
  {
    id: 4,
    title: "Ford Mustang Dashboard Interface",
    description:
      "Developed tablet console interface for the Ford Mustang dashboard with media controls and optimized performance.",
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
    tags: ["React", "Webpack", "Preact", "Performance Optimization"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
