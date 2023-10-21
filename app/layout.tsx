import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { ModalProvider } from "@/lib/providers/modal-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ToastProvider } from "@/lib/providers/toast-provider";

import { Footer, NavigationBar } from "@/components/index";

import "@/app/styles/globals.css";

type Children = {
  children: ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    shortcut: "/logo/png",
  },
  title: "DKS | Duka Kuu",
  description:
    "Discover a world of convenience and choice at the Duka Kuu Store. Shop with ease and explore a wide range of quality products. Your one-stop destination for online shopping excellence.",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className="scroll-smooth font-opensans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider />
          <ToastProvider />
          <NavigationBar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
