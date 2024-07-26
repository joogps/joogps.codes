import Image from 'next/image';
import CapsuleButton from "@/components/Button/CapsuleButton";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full px-8 md:px-36 items-start">
    <h1 className="py-12 text-4xl font-bold"> Privacy policy
    </h1>

    <h2>Information we collect</h2>

    <p> Magic does not collect user information. </p>

    <h2>Contact us</h2>

    <p>If you have any questions or concerns about our use of your data, please contact us at <a href="mailto:magic@joogps.com">magic@joogps.com</a>.</p>

    <CapsuleButton className="capsule-button-secondary-light my-6" href="./">
    <p className="py-2 px-5 text-nowrap"> go back </p>
    </CapsuleButton>
    </div>
  );
};