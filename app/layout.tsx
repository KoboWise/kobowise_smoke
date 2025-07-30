import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
  
    },
    {
      path: "../assets/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
      
    },
    {
      path: "../assets/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    
    },
  ],
  variable: "--font-satoshi",
});
const aeonik = localFont({
  src: [
    {
      path: "../assets/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
  
    },
    {
      path: "../assets/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "medium",
      
    },
    {
      path: "../assets/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "bold",
    
    },
    {
      path: "../assets/fonts/Aeonik-Black.otf",
      weight: "800",
      style: "bold",
    
    },
  ],
  variable: "--font-aeonik",
});


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`${aeonik.variable}  antialiased min-h-screen text-foreground bg-background`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        {children}
        </Providers>
      </body>
    </html>
  );
}
