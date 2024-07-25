import Image from "next/image";
import Link from 'next/link'
import CapsuleButton from "@/components/Button/CapsuleButton";

import Header from "@/components/Header";
import ArrowLink from "@/components/ArrowLink";

export default function Home() {
  return (
    <main>
      <div className=" my-12 md:mt-36 w-full flex flex-col items-center">
        <div className="flex flex-col text-2xl font-semibold space-y-6 items-start max-w-[580px] mx-16">
        <p>
        <span className="">hey. my name is joão pozzobon</span> — i'm a software engineer from Brazil and computer science major at <span className="gt-background">GT</span> <ArrowLink href="https://gatech.edu" className="text-[rgb(106,94,52)]">Georgia Tech</ArrowLink>.
        </p>

        <p>over the years i've launched successful projects such as <span className="opacity-75"><ArrowLink href="https://push.joogps.com">push</ArrowLink>, a smart push-up tracking and social workout app</span>, <span className="text-purple-800"><ArrowLink href="https://magic.joogps.com"> Magic</ArrowLink>, an innovative drawing app for macOS</span>, and many more.</p>

        <p>i was also awarded the  WWDC Swift Student Challenge award in <ArrowLink href="" className="">2020</ArrowLink> and <ArrowLink href="" className="">2021</ArrowLink>.</p>
        </div>
      </div>

      {/* <div className="w-full flex flex-col space-y-5 items-center justify-center p-8">
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
      </div> */}

      {/* <div className={`w-full flex lg:flex-row flex-col lg:justify-between items-center bg-gradient-to-t to-purple-950 from-purple-900 rounded-2xl border border-white border-opacity-10 ${space.className}`}>
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
        </div> */}

      {/* </div>
      </div> */}
    </main>
  );
}
