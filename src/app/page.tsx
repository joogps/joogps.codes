import Image from "next/image";
import Link from 'next/link'
import CapsuleButton from "@/components/Button/CapsuleButton";

import Header from "@/components/Header";
import ArrowLink from "@/components/ArrowLink";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <div className=" w-full flex flex-col items-center">
        <div className="flex flex-col my-12 md:mt-36 text-2xl font-semibold space-y-8 items-start max-w-[580px] mx-16">
        <p>
        <span className="">hey. my name is joão pozzobon</span> — i'm a software engineer from southern Brazil and computer science major at <span className="gt-background">GT</span> <ArrowLink href="https://gatech.edu" className="text-[rgb(106,94,52)]">Georgia Tech</ArrowLink>.
        </p>

        <p>over the years i've launched successful projects such as <span className="opacity-75"><ArrowLink href="https://push.joogps.com">push</ArrowLink>, a smart push-up tracking and social workout app</span>, <span className="text-purple-800"><ArrowLink href="https://magic.joogps.com"> Magic</ArrowLink>, an innovative drawing app for macOS</span>, Dusk, an unofficial Twitter client for the Vision Pro, and many more.</p>

        <p>i was also awarded the  WWDC Swift Student Challenge award in <ArrowLink href="https://www.youtube.com/watch?v=cf-_kp-4W48" className="">2020</ArrowLink> and <ArrowLink href="https://apps.apple.com/br/app/readyset-a-math-playground/id6461308322?mt=12" className="">2021</ArrowLink>.</p>

        <p>you can find me on <ArrowLink href="https://twitter.com/joogps">Twitter</ArrowLink>, <ArrowLink href="https://instagram.com/joogps"> Instagram </ArrowLink>, <ArrowLink href="https://github.com/joogps"> GitHub </ArrowLink>, <ArrowLink href="https://linkedin.com/in/joogps/"> LinkedIn </ArrowLink> and <ArrowLink href="https://youtube.com/channel/UCoI_nPpWO2sY8wVViyOmAIA"> YouTube </ArrowLink></p>

        <div className="w-full h-[1px] bg-current opacity-20"></div>

        <div className="w-full text-nowrap px-2 flex font-semibold justify-end">
            <p className="opacity-20 text-sm">© {year} João Pozzobon </p>
        </div>
        </div>
      </div>
    </main>
  );
}
