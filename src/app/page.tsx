import Image from "next/image";
import ArrowLink from "@/components/ArrowLink";

import DuskLogo from "../../public/Dusk.png";
import GeorgiaTechLogo from "../../public/Georgia Tech.png";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <div className=" w-full flex flex-col items-center bg-stone-100 dark:bg-black">
        <div className="flex flex-col bg-white dark:bg-zinc-950 p-12 md:my-24 text-2xl font-semibold space-y-8 items-start md:max-w-[660px] md:mx-16 md:rounded-2xl md:border-2 border-stone-200 dark:border-zinc-800">
        <p>
        <span className="">hey. my name is joão pozzobon</span> — i'm a software engineer from southern Brazil and computer science major at <Image className="inline-block mb-1" src={GeorgiaTechLogo} alt="Dusk" height="22"></Image> <ArrowLink href="https://gatech.edu" className="text-[rgb(106,94,52)] dark:text-[rgb(206,194,152)]">Georgia Tech</ArrowLink>.
        </p>

        <p>over the years i've launched successful projects such as <span className="opacity-85"><ArrowLink href="https://push.joogps.com" className="expanded-font">push</ArrowLink>, a smart push-up tracking and social workout app</span>, <span className="text-purple-900 dark:text-purple-300"><svg className="inline-block fill-purple-800 dark:fill-purple-400 mb-1" width="22px" height="22px" viewBox="0 0 114.337224 120.124028" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.0855116,0.0634719123 L50.2579027,0.0636637019 C53.7334136,0.155560574 51.8242657,5.68028038 49.0366521,13.0970018 L48.1125536,15.5507166 C42.6620026,30.0560409 35.843042,49.8111294 56.8304258,51.8913994 C129.534008,59.0977805 127.739241,120.1875 83.0318489,120.1875 C80.3022451,120.1875 80.8482456,117.995778 81.8343397,114.795863 L82.1754479,113.693508 C84.8947829,104.854464 88.4545578,90.1227238 43.4425816,90.1227238 C-20.8602416,90.1227238 -5.42041937,35.139986 36.7617066,6.832447 C43.7850306,2.11924176 47.907058,0.113766018 50.0855116,0.0634719123 Z" id="Shape"></path>
            </svg> <ArrowLink href="https://magic.joogps.com"> Magic</ArrowLink>, an innovative drawing app for macOS</span>, <span className="text-sky-800 dark:text-sky-200"><Image className="inline-block mb-1" src={DuskLogo} alt="Dusk" height="22"></Image> <ArrowLink href="https://apps.apple.com/app/dusk-for-twitter/id6478421686">Dusk</ArrowLink>, an unofficial Twitter client for the Vision Pro</span>, and many more.</p>

        <p>i was also awarded the <span className="expanded-font">WWDC</span> Swift Student Challenge award in <ArrowLink href="https://www.youtube.com/watch?v=cf-_kp-4W48" className="">2020</ArrowLink> and <ArrowLink href="https://apps.apple.com/br/app/readyset-a-math-playground/id6461308322?mt=12" className="">2021</ArrowLink>.</p>

        <p>you can find me on <ArrowLink href="https://twitter.com/joogps">Twitter</ArrowLink>, <ArrowLink href="https://instagram.com/joogps"> Instagram </ArrowLink>, <ArrowLink href="https://github.com/joogps"> GitHub </ArrowLink>, <ArrowLink href="https://linkedin.com/in/joogps/"> LinkedIn </ArrowLink> and <ArrowLink href="https://youtube.com/channel/UCoI_nPpWO2sY8wVViyOmAIA"> YouTube </ArrowLink>.</p>

        <div className="w-full h-[1px] -mx-1 rounded-full bg-current opacity-25"></div>

        <div className="w-full text-nowrap px-2 flex font-semibold justify-end">
            <p className="opacity-25 text-sm">© {year} João Pozzobon </p>
        </div>
        </div>
      </div>
    </main>
  );
}
