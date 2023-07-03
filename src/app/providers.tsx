"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import PlausibleProvider from "next-plausible";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="gpt.ltopx.com">
      <SessionProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </SessionProvider>
    </PlausibleProvider>
  );
}
