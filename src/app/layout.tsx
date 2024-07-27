import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Preview from "../../public/preview.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "joão pozzobon",
  description: "my name is joão pozzobon and i build things",
  other: {
    "og:image": "https://joogps.com" + Preview.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
