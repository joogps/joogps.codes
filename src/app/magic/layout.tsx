import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Metadata } from "next";
const space = Space_Grotesk({subsets: ["latin"], });

import Preview from "../../../public/push/preview.png";
import dynamic from "next/dynamic";

const P5Canvas = dynamic(() => import('./P5Canvas'), {
    ssr: false,
})

export const metadata: Metadata = {
    title: "Magic - Drawing and AI",
    description: "Magic is the drawing app made for the Mac, and for the fun. With it you can turn your trackpad into your very own graphics tablet.",
    other: {
      "apple-itunes-app": "app-id=1581223559",
      "apple-mobile-web-app-title": "Magic",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "white",
      "theme-color": "#000000",
      "og:image": "https://magic.joogps.com"+Preview.src,
    }
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const year = new Date().getFullYear();

    return (
        <html lang="en">
        <body>
        <main className={`text-black ${space.className}`}>
        <div className={`w-full items-center flex flex-col ${space.className}`}>
        <div className="fixed left-0 -z-10">
            <P5Canvas/>
        </div>

        <div className="items-start w-full p-8 fill-purple-700 bg-white bg-opacity-50 background-blur-header">
            <Link href="https://magic.joogps.com">
            <svg width="40px" height="40px" viewBox="0 0 114.337224 120.124028" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.0855116,0.0634719123 L50.2579027,0.0636637019 C53.7334136,0.155560574 51.8242657,5.68028038 49.0366521,13.0970018 L48.1125536,15.5507166 C42.6620026,30.0560409 35.843042,49.8111294 56.8304258,51.8913994 C129.534008,59.0977805 127.739241,120.1875 83.0318489,120.1875 C80.3022451,120.1875 80.8482456,117.995778 81.8343397,114.795863 L82.1754479,113.693508 C84.8947829,104.854464 88.4545578,90.1227238 43.4425816,90.1227238 C-20.8602416,90.1227238 -5.42041937,35.139986 36.7617066,6.832447 C43.7850306,2.11924176 47.907058,0.113766018 50.0855116,0.0634719123 Z" id="Shape"></path>
            </svg>
            </Link>
        </div>
        
        {children}
        
        <div className="w-full text-nowrap bg-purple-600 text-white px-12 min-h-[96px] flex font-semibold items-center justify-between">
            <div className="flex flex-col md:flex-row md:space-x-4">
            <Link href="/magic/privacy"> privacy policy </Link>
            <Link href="mailto:magic@joogps.com"> contact us </Link>
            </div>

            <p> <span className="opacity-50">© {year}</span> <Link href="https://joogps.com" className="underline opacity-50 hover:opacity-100"> João Pozzobon</Link> </p>
        </div>
        </div>
        </main>
        </body>
        </html>
    );
}