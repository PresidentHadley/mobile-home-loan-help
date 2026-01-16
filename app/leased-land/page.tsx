import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Leased Land & Mobile Home Parks (Chattel Loans Explained)",
  description:
    "Learn how financing works for leased land/mobile home parks, why traditional mortgages often don’t apply, and what chattel loans are. Varies by lender and state.",
  alternates: { canonical: "/leased-land" }
};

export default function LeasedLandPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leased Land Guide</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Buying a manufactured home in a park (leased land) is common — and it changes how financing works.
        </p>
      </div>

      <DisclaimerBox title="Quick disclaimer">
        This page is educational. Programs and requirements vary by lender and state. Consult a licensed lender for
        current options.
      </DisclaimerBox>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">What is “leased land”?</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Leased land usually means you own the home, but you rent the land it sits on (often in a mobile home park).
            You’ll typically pay a monthly lot rent in addition to your loan payment.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Why traditional mortgages often don’t work</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            A standard mortgage is usually secured by real estate (the land + the home). If you don’t own the land, many
            lenders can’t structure it as a typical mortgage — though rules vary by program and state.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Chattel loans (simple explanation)</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            A chattel loan is often used when the home is treated more like personal property than real estate. It can
            be common for leased-land situations. Terms, rates, and requirements vary by lender and credit profile.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Rates shown in ads are examples only — your rate depends on credit and other factors.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Pros and cons (high level)</h2>
          <div className="mt-3 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-gray-900">Pros</div>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>May fit park/leased-land scenarios</li>
                <li>Often faster closings than complex mortgages</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Cons</div>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Rates can be higher than traditional mortgages</li>
                <li>Shorter terms may increase monthly payments</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">Exact terms vary by lender, state, and property characteristics.</p>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Not sure which option applies?</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We can connect you with a specialist who understands leased land and manufactured home financing in your
              state.
            </p>
          </div>
          <CTAButton href="/get-help">Connect with a specialist</CTAButton>
        </div>
      </section>
    </div>
  );
}

