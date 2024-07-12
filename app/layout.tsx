import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next/types";
import SessionWrapper from "@/components/session-wrapper";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Law Service",
  description: "An app to help with Law unfairness",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body
          className={cn("antialiased", fontHeading.variable, fontBody.variable)}
        >
          <main className="mx-auto">{children}</main>
        </body>
      </SessionWrapper>
    </html>
  );
}
