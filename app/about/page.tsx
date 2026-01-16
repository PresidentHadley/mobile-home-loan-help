import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "About MobileHomeLoanHelp",
  description:
    "Learn what MobileHomeLoanHelp.com is, who operates it (Momentum Growth Partners LLC), and how we connect consumers with licensed lending partners. We are not a lender.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          MobileHomeLoanHelp.com is designed to help you understand manufactured and mobile home financing in plain
          language, and connect you with licensed professionals when you want personalized guidance.
        </p>
      </div>

      <DisclaimerBox title="We are not a lender">
        We are an educational resource and lead referral service. We do not make credit decisions, set rates, or
        guarantee approvals.
      </DisclaimerBox>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">What this site is</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Educational content about manufactured/mobile home financing</li>
            <li>Tools like a payment calculator (educational estimates)</li>
            <li>Lead referral service connecting you with licensed brokers/lenders</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">What this site is not</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>A lender</li>
            <li>Financial advice</li>
            <li>A guarantee of approval, rates, or terms</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Who operates this site</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          MobileHomeLoanHelp.com is operated by <span className="font-semibold text-gray-800">Momentum Growth Partners LLC</span>.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">How we make money</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          We may receive referral fees from licensed brokers/lenders when we connect consumers and a successful referral
          occurs. This does not change the educational intent of our content.
        </p>
      </section>
    </div>
  );
}

