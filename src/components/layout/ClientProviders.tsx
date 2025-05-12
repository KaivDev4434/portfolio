"use client"

import { FormspreeProvider } from "@formspree/react";
import { ThemeProvider } from "next-themes";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormspreeProvider project="mkgjeeyr">
      <ThemeProvider 
        attribute="class" 
        defaultTheme="light"
        forcedTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </FormspreeProvider>
  );
} 