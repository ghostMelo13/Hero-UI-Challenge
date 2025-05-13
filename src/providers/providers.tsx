"use client";
import { FC, ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
};

export default Provider;
