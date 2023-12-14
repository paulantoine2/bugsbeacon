import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "BugsBeacon",
  description: "Error tracking and performance monitoring for React apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen font-sans antialiased dark:bg-dark-tremor-background " +
          GeistSans.variable +
          " " +
          GeistMono.variable
        }
      >
        {children}
      </body>
    </html>
  );
}
