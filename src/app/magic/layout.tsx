import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Metadata } from "next";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
const space = Space_Grotesk({ subsets: ["latin"] });

import Preview from "../../../public/magic/preview.png";
import Favicon from "../../../public/magic/favicon.ico";

import dynamic from "next/dynamic";
import MagicLogo from "@/components/MagicLogo";

const P5Canvas = dynamic(() => import("./P5Canvas"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Magic — Drawing and AI",
  description:
    "Magic is the drawing app made for the Mac, and for the fun. With it you can turn your trackpad into your very own graphics tablet.",
  other: {
    "apple-itunes-app": "app-id=1581223559",
    "apple-mobile-web-app-title": "Magic",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "#7E22CE",
    "theme-color": "#7E22CE",
    "og:image": "https://magic.joogps.com" + Preview.src,
  },
  icons: {
    icon: "https://magic.joogps.com" + Favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <Analytics />
      <body>
        <main className={`text-black ${space.className}`}>
          <div
            className={`w-full min-h-dvh justify-between items-center flex flex-col ${space.className}`}
          >
            <div className="fixed bg-white w-full h-full"></div>
            <div className="fixed left-0 hidden md:block">
              <P5Canvas />
            </div>

            <div className="items-start w-full p-8 fill-purple-700 bg-white bg-opacity-50 background-blur-header">
              <Link href="https://magic.joogps.com">
                <MagicLogo size="40px" />
              </Link>
            </div>

            <div className="z-0">{children}</div>

            <div className="z-50 w-full text-nowrap bg-purple-600 text-white px-12 min-h-[128px] md:min-h-[96px] flex font-semibold items-center justify-between">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
                <Link href="https://magic.joogps.com/privacy">
                  {" "}
                  privacy policy{" "}
                </Link>
                <Link href="https://magic.joogps.com/version-history">
                  {" "}
                  version history{" "}
                </Link>
                <Link href="mailto:magic@joogps.com"> contact us </Link>
              </div>

              <p>
                {" "}
                <span className="opacity-50">© {year}</span>{" "}
                <Link
                  href="https://joogps.com"
                  className="underline opacity-50 hover:opacity-100"
                >
                  {" "}
                  João Pozzobon
                </Link>{" "}
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
