import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Preview from "../../../public/preview.png";

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
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <main>
          <div className=" w-full flex flex-col items-center bg-stone-100 dark:bg-black">
            <div className="flex flex-col bg-white dark:bg-zinc-950 p-12 md:my-24 text-xl sm:text-2xl font-semibold space-y-8 items-start md:max-w-[660px] md:mx-16 md:rounded-2xl md:border-2 border-stone-200 dark:border-zinc-800">
              {children}

              <div className="w-full h-[1px] -mx-1 rounded-full bg-current opacity-25"></div>

              <div className="w-full text-nowrap px-2 flex font-semibold justify-end">
                <p className="opacity-25 text-sm">© {year} João Pozzobon </p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
