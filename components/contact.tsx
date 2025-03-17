"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Send, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your API route
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through the form or via the following
                channels:
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:harish.gpa@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  harish.gpa@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+16475630780"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +1 647-563-0780
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <a
                  href="https://www.linkedin.com/in/harish-g-83b14a235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  linkedin.com/in/harish-g-83b14a235
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
