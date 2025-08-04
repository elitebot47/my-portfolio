import ContactProfilesCard from "@/components/contactPage/contact-profiles-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rishab Yadav",
  description:
    "Connect with Rishab Yadav, a Full Stack Web Developer. Find contact information for inquiries, collaborations, and more.",
};
export default async function ContactPage() {
  return (
    <div className="w-full lg:py-36 flex flex-col items-center h-full lg:px-52 px-3 pt-28   ">
      <ContactProfilesCard />
    </div>
  );
}
