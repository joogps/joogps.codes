import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MeshGradient from "@/components/MeshGradient";
import Link from "next/link";
import Image from 'next/image';

import Logo from "../../../public/push/logo.png";

const inter = Inter({ subsets: ["latin"] });

import Preview from "../../../public/push/preview.png";

export const metadata: Metadata = {
  title: "push-up tracker - download the push app",
  description: "count your push-ups with your iPhone camera",
  other: {
    "apple-itunes-app": "app-id=1587610077",
    "apple-mobile-web-app-title": "push",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "theme-color": "#000000",
    "og:image": "https://push.joogps.com"+Preview.src,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main>
      <MeshGradient></MeshGradient>

      <div className="pt-8 w-full h-svh flex flex-col">
        <Link href="push.joogps.com">
        <Image src={Logo} className="mx-8" alt="apple" height={30} />
        </Link>

        <div className="justify-between h-full flex flex-col items-end">
            {children}

            <div className="w-full text-nowrap bg-neutral-950 px-12 min-h-[96px] flex font-semibold items-center justify-between">
              <div className="flex flex-col md:flex-row md:space-x-4">
              <Link href="/push/privacy"> privacy policy </Link>
              <Link href="mailto:push@joogps.com"> contact us </Link>
              </div>

              <p className="opacity-50"> © 2021 João Pozzobon </p>
          </div>
        </div>
      </div>
    </main>
    </body>
    </html>
  );
}
