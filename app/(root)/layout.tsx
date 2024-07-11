import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Metadata } from "next/types";
import Header from "@/components/header";

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
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <Header />
        <main className="mx-auto w-11/12">{children}</main>
      </body>
    </html>
  );
}
