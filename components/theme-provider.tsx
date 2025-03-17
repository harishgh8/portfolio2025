"use client";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemesProps,
} from "next-themes";
import type { ReactNode } from "react";

interface ThemeProviderProps extends Partial<NextThemesProps> {
  children: ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
