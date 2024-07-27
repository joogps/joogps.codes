import ArrowLink from "@/components/ArrowLink";
import CapsuleButton from "@/components/Button/CapsuleButton";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full items-start">
      <h1 className="text-4xl font-bold"> privacy policy</h1>

      <h2>information we collect</h2>

      <p> we do not collect user information. </p>

      <h2>contact us</h2>

      <p>
        if you have any questions or concerns about our use of your data, please
        contact us at{" "}
        <ArrowLink href="mailto:hi@joogps.com">hi@joogps.com</ArrowLink>.
      </p>

      <CapsuleButton className="capsule-button-secondary-light my-6" href="./">
        <p className="py-2 px-5 text-nowrap"> go back </p>
      </CapsuleButton>
    </div>
  );
}
