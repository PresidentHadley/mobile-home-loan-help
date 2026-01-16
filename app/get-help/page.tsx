import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Get Personalized Help (Connect With Licensed Brokers)",
  description:
    "Request personalized help for manufactured/mobile home financing. We’ll connect you with state-licensed lending partners who can explain options. No obligation.",
  alternates: { canonical: "/get-help" }
};

export default function GetHelpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Personalized Help</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Share a few details and we’ll connect you with licensed lending partners who can discuss options in your
          state. You’re under no obligation to accept any offer.
        </p>
      </div>

      <LeadForm sourcePage="/get-help" />
    </div>
  );
}

