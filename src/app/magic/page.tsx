import MagicSketch from "./MagicSketch";
import Image from "next/image";

import logo from "../../../public/magic/logo.svg";
import mockup from "../../../public/magic/mockup.png";

import { Space_Grotesk } from "next/font/google";
import CapsuleButton from "@/components/Button/CapsuleButton";
import Link from "next/link";
const space = Space_Grotesk({subsets: ["latin"], });

export default function Magic() {
    return (
        <div className="flex flex-col items-center m-8 md:m-16 text-center space-y-8">
            <h3 className="font-bold text-5xl text-shadow">
            <span className="text-purple-600">Magic</span>  is the drawing app <br></br>made for the Mac, and for the fun.
            </h3>

            <div className="flex flex-row space-x-4">
                
            <CapsuleButton className="bg-purple-500 hover:bg-purple-700 border-none text-white" href="https://apps.apple.com/app/apple-store/id1587610077?pt=122431166&ct=Website&mt=8">
                <p className="py-2 px-5 text-nowrap"> get the app ↓ </p>
            </CapsuleButton>

            <CapsuleButton className="capsule-button-secondary" href="https://apps.apple.com/app/apple-store/id1587610077?pt=122431166&ct=Website&mt=8">
                <p className="py-2 px-5 text-nowrap"> learn more </p>
            </CapsuleButton>
            </div>
            
            <Image src={mockup} className="pt-8" alt="Mockup" />
        </div>
    );
}