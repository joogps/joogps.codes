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
    "og:image": Preview.src,
    "twitter:image": Preview.src,
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
        <Link href="/push">
        <Image src={Logo} className="mx-8" alt="apple" width={100} height={50} />
        </Link>

        <div className="justify-between h-full flex flex-col items-end">
            {children}
            <div className="w-full bg-neutral-950 px-12 min-h-[96px] flex flex-row items-center space-x-4 font-semibold">
                <Link href="/push/privacy-policy"> privacy policy </Link>
                <Link href="mailto:joogps@icloud.com"> contact us </Link>
            </div>
        </div>
      </div>
    </main>
    </body>
    </html>
  );
}
