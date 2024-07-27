import Image from "next/image";

import mockup from "../../../public/magic/mockup.png";

import CapsuleButton from "@/components/Button/CapsuleButton";

export default function Magic() {
    return (
        <div className="flex flex-col items-center m-8 md:m-16 text-center space-y-8">
            <h3 className="font-bold text-5xl text-shadow">
            <span className="text-purple-600">Magic</span>  is the drawing app <br></br>made for the Mac, and for the fun.
            </h3>

            <div className="flex flex-row space-x-4">
                
            <CapsuleButton className="bg-purple-500 hover:bg-purple-700 border-none text-white" href="https://apps.apple.com/app/apple-store/id1581223559?pt=122431166&ct=Website&mt=8">
                <p className="py-2 px-5 text-nowrap"> get the app ↓ </p>
            </CapsuleButton>

            <CapsuleButton className="capsule-button-secondary-light" href="https://joogps.notion.site/Magic-765b88c426a740b88b30bbeb0d067017?pvs=4">
                <p className="py-2 px-5 text-nowrap text-black"> learn more </p>
            </CapsuleButton>
            </div>
            
            <Image src={mockup} className="pt-8" alt="Mockup" />
        </div>
    );
}