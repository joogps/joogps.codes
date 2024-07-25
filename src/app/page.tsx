import Image from "next/image";
import Link from 'next/link'
import CapsuleButton from "@/components/Button/CapsuleButton";
import { Space_Grotesk } from "next/font/google";

import Header from "@/components/Header";

const space = Space_Grotesk({subsets: ["latin"], });

export default function Home() {
  return (
    <main>
      <div className="p-12 md:p-24 my-12 z-10 h-96 w-full flex flex-col items-start justify-between text-sm lg:flex">
        <h1 className="mb-3 text-4xl font-semibold text-white">
          my name is joão pozzobon <span className="text-white text-opacity-50">— i'm a software engineer and computer science student.</span>
        </h1>

        <div className="flex items-center space-x-10">
        <Image src="/apple.svg" style={{ filter: 'invert(100%)' }} className="hover:scale-95" alt="apple" width={60} height={60} />
        <Image src="/seal.svg" style={{ filter: 'brightness(0%) invert(100%)' }} className="hover:scale-95" alt="push" width={60} height={60} />
        </div>
      </div>

      <div className="w-full flex flex-col space-y-5 items-center justify-center p-8">
      <div className="w-full flex lg:flex-row flex-col lg:justify-between items-center bg-gradient-to-t to-neutral-950 from-neutral-900 rounded-2xl border border-neutral-100 border-opacity-10">
        <div className="flex flex-col items-start space-y-5 m-16">
        <Image className="ml-2" src="/push.png" alt="push" width={300} height={300} />
        <p className="text-xl font-medium ml-2"> your new favorite workout companion. </p>

        <div className="flex items-center space-x-2">
        <CapsuleButton style="capsule-button-primary" href="">
          learn more
        </CapsuleButton>

        <CapsuleButton href="">
          download ↓
        </CapsuleButton>
        </div>
        </div>

        <Image src="/push mockup.png" alt="push" width={400} height={400} />
      </div>

      <div className={`w-full flex lg:flex-row flex-col lg:justify-between items-center bg-gradient-to-t to-purple-950 from-purple-900 rounded-2xl border border-white border-opacity-10 ${space.className}`}>
        <div className="flex flex-col items-start space-y-5 m-16">
        <h1 className="text-6xl font-extrabold" > Magic </h1>
        <p className="text-xl font-medium"> An amazing drawing app. An incredible interface. And an astonishing AI assistant. </p>

        <div className="flex items-start space-x-2">
        <CapsuleButton style="capsule-button-primary" href="">
          Learn more
        </CapsuleButton>

        <CapsuleButton href="">
          Download ↓
        </CapsuleButton>
        </div>
        </div>

      </div>
      </div>

      <Header></Header>
    </main>
  );
}
