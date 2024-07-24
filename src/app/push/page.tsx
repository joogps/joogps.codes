import Image from 'next/image';
import CapsuleButton from "@/components/Button/CapsuleButton";
import Link from "next/link";

export default function PushPage() {
  return (
        <div className="flex md:flex-row flex-col md:h-full w-full md:space-y-0 justify-between items-center md:items-start">
            <div className="items-start space-y-6 w-full pl-16 pr-16 md:pr-0 py-12 md:w-1/2 flex flex-col">
            <h1 className="md:ph-36 expanded-font gradient-text mb-3 text-4xl text-white">
            your new favorite workout companion
            </h1>

            <div className="font-semibold flex-row flex flex-wrap">
                <p className="feature-highlight"> track push-ups automatically </p>
                <p className="feature-highlight"> sleek interface </p>
                <p className="feature-highlight"> gain helpful insights </p>
                <p className="feature-highlight"> share to Instagram and more </p>
            </div>

            <div className="flex items-start flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <CapsuleButton style="capsule-button-secondary" href="https://apps.apple.com/app/apple-store/id1587610077?pt=122431166&ct=Website&mt=8">
                <div className="flex flex-col items-center">
                    <Image className="bg-white w-full hidden md:block" src="/qr_code.png" alt="qr code" width={100} height={100} />
                    <p className="py-2 px-5 text-nowrap"> get the app ↓ </p>
                </div>
            </CapsuleButton>
            <Link href="">
            <div className="flex flex-col items-start space-y-2">
                <h2 className="text-white text-opacity-50 font-bold"> FEATURED ON </h2>
                <Image src="/9to5mac.png" alt="apple" width={200} height={100} />
            </div>
            </Link>
            </div>
            </div>
            
            <Image src="/Mock.png" alt="apple" className="md:fixed md:bottom-0 md:right-8 z-0 md:z-50 md:w-2/5" width={400} height={0} />
        </div>
  );
};