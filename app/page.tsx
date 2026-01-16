import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Mobile Home Financing Guide | Understand Your Loan Options",
  description:
    "Educational resource for manufactured and mobile home financing. Learn about loan types, requirements, and connect with licensed brokers in your state.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mobile Home Financing Guide | Understand Your Loan Options",
    description:
      "Educational resource for manufactured and mobile home financing. Learn about loan types, requirements, and connect with licensed brokers in your state.",
    url: "/"
  }
};

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-gray-600">{children}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          Educational guides • Not a lender
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Understanding Mobile Home Financing Made Simple
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-600">
          Manufactured home loans can feel confusing — especially with leased land, older homes, or credit challenges.
          We break it down in plain language and connect you with licensed brokers when you want personalized help.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CTAButton href="/get-help">Get Personalized Help</CTAButton>
          <Link className="text-sm font-semibold text-gray-800 underline underline-offset-4" href="/requirements">
            See typical requirements
          </Link>
        </div>
        <p className="text-xs text-gray-500">
          Requirements vary by lender and state. This site is educational — no guarantees of approval or specific terms.
        </p>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-gray-900">Quick estimate</div>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Use the calculator below for a rough monthly payment estimate. For accurate quotes, talk to a licensed
            lender.
          </p>
        </div>
        <div className="mt-6">
          <Calculator />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <InfoCard title="How it works">
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            <li>
              <span className="font-semibold text-gray-800">Learn</span>: Read guides tailored to mobile/manufactured
              homes.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Estimate</span>: Use the calculator for educational
              numbers.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Connect</span>: When you’re ready, we match you with
              licensed lending partners.
            </li>
          </ol>
        </InfoCard>

        <InfoCard title="Common loan types (high level)">
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-semibold text-gray-800">Chattel loans</span> (often used for leased land / parks).
            </li>
            <li>
              <span className="font-semibold text-gray-800">Manufactured home mortgages</span> (when land + home qualify).
            </li>
            <li>
              <span className="font-semibold text-gray-800">FHA Title I</span> (may be more flexible in some cases).
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">Options vary by property type, lender, and state.</p>
        </InfoCard>

        <InfoCard title="Trust indicators">
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-semibold text-gray-800">Educational-first</span>: no “guaranteed approval” claims.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Licensed partners</span>: lenders/brokers licensed in their states.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Clear disclaimers</span>: estimates and requirements vary.
            </li>
          </ul>
        </InfoCard>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Want personalized lender options?</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Tell us your state, timeline, and whether you’re looking at a new or used home. We’ll connect you with a
              licensed professional who can explain your options.
            </p>
            <div className="mt-4">
              <CTAButton href="/get-help">Request help</CTAButton>
            </div>
          </div>
          <DisclaimerBox title="Friendly note">
            We’re not a lender, and we don’t make credit decisions. We share educational info and help connect you with
            licensed lending partners who can provide real quotes.
          </DisclaimerBox>
        </div>
      </section>
    </div>
  );
}

