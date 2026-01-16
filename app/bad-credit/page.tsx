import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Mobile Home Loans With Bad Credit (No Judgment)",
  description:
    "Educational guide to manufactured/mobile home loan options for challenged credit. Learn what to expect and how lenders evaluate risk. Varies by lender and state.",
  alternates: { canonical: "/bad-credit" }
};

export default function BadCreditPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bad Credit Options</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Credit challenges happen — and you still may have options. This page explains the landscape in plain language
          (without hype).
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Credit score ranges (simplified)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">Excellent / Good</span>: more lender choices.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Fair</span>: approvals may rely on down payment, income, and
              property factors.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Poor</span>: specialized programs may exist, often with
              higher borrowing costs or more cash down.
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">Requirements vary by lender and state.</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">What to expect (typical)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Higher borrowing costs vs top-tier credit (pricing depends on credit and other factors).</li>
            <li>Down payments may be larger (often 10%–30%, varies by lender).</li>
            <li>More documentation to verify income and stability.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Program examples you might hear about</h2>
          <div className="mt-3 space-y-3 text-sm text-gray-600">
            <p>
              Some borrowers explore programs like <span className="font-semibold text-gray-800">FHA Title I</span> or
              other specialized manufactured home lenders. Eligibility depends on the home, land situation, and lender
              guidelines. <span className="text-gray-500">(Varies by lender and state.)</span>
            </p>
            <p>
              If your home is on leased land, you may see{" "}
              <Link className="font-semibold underline" href="/leased-land">
                chattel loan
              </Link>{" "}
              options.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Credit improvement (general tips)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Pay down high-utilization credit cards (even small reductions can help).</li>
            <li>Make on-time payments consistently.</li>
            <li>Check your report for errors and dispute inaccuracies.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">
            These are general tips — consult professionals for personalized guidance.
          </p>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Let’s find a lender who works with your situation</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Share a few details and we’ll connect you with licensed lending partners who can explain real options in
              your state.
            </p>
          </div>
          <CTAButton href="/get-help">Request help</CTAButton>
        </div>
      </section>
    </div>
  );
}

