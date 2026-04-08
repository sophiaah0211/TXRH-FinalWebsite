import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Texas Roadhouse | Strategic Analysis",
  description:
    "A premium four-part strategic analysis microsite on Texas Roadhouse built from project financials, survey findings, interviews, and review evidence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
