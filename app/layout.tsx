import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish Gangadharappa | Front-End Developer",
  description:
    "Personal portfolio showcasing my projects, skills, and experience as a Front-End Developer with expertise in React, Next.js, and TypeScript.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    title: "Harish Gangadharappa | Front-End Developer",
    description:
      "Personal portfolio showcasing my projects, skills, and experience as a Front-End Developer with expertise in React, Next.js, and TypeScript.",
    siteName: "Harish Gangadharappa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish Gangadharappa | Front-End Developer",
    description:
      "Personal portfolio showcasing my projects, skills, and experience as a Front-End Developer with expertise in React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className="w-full py-6 border-t">
            <div className="container flex flex-col items-center justify-center gap-2 px-4 md:px-6 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Harish Gangadharappa. All rights
                reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
