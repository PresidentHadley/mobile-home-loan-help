import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Mobile Home Loan Requirements (Typical Guidelines)",
  description:
    "Learn typical manufactured/mobile home loan requirements: credit ranges, down payments, income verification, property rules, and common documents. Varies by lender and state.",
  alternates: { canonical: "/requirements" }
};

export default function RequirementsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Typical Loan Requirements</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Manufactured home financing can look different from a traditional mortgage. Below are common requirements —
          but <span className="font-semibold">requirements vary by lender and state</span>.
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Credit score (typical ranges)</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
            <p>
              Many programs look for a score around <span className="font-semibold text-gray-800">600+</span>, though
              some lenders work with borrowers below <span className="font-semibold text-gray-800">600</span>.
              <span className="text-gray-500"> (Varies by lender and state.)</span>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-gray-800">Excellent/Good</span>: more lender options, often better
                terms.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Fair</span>: options may exist with higher borrowing costs or
                down payment.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Poor</span>: specialized lenders may require larger down
                payments and documentation.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Down payment (common expectations)</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
            <p>
              A typical range is <span className="font-semibold text-gray-800">5%–30%</span>, depending on credit,
              property type, and whether the home is new/used. <span className="text-gray-500">(Varies by lender.)</span>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Lower down payments may require stronger credit and compensating factors.</li>
              <li>Used homes or leased-land situations can require more cash down.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Income verification & DTI</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
            <p>
              Lenders typically verify income (paystubs, tax returns, bank statements) and evaluate your debt-to-income
              ratio (DTI). <span className="text-gray-500">(Guidelines vary.)</span>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Stable income and employment history can improve options.</li>
              <li>Higher DTIs may still qualify with strong credit or larger down payment.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Property requirements</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-gray-800">HUD code</span>: many lenders prefer homes built after
                1976 (HUD-code manufactured homes).
              </li>
              <li>
                <span className="font-semibold text-gray-800">Foundation</span>: some programs require permanent
                foundation and land ownership.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Age/condition</span>: used homes may have inspection or
                condition requirements.
              </li>
            </ul>
            <p className="text-gray-500">Rules vary by lender, state, and whether the land is owned or leased.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Documents you may need</h2>
        <div className="mt-3 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
          <ul className="list-disc space-y-2 pl-5">
            <li>Photo ID</li>
            <li>Paystubs / proof of income</li>
            <li>Bank statements</li>
            <li>Tax returns (often 1–2 years)</li>
          </ul>
          <ul className="list-disc space-y-2 pl-5">
            <li>Purchase contract</li>
            <li>Home information (year, make/model, serial/VIN)</li>
            <li>Land info (owned vs leased)</li>
            <li>Park lease (if applicable)</li>
          </ul>
        </div>
        <p className="mt-3 text-xs text-gray-500">Exact documentation varies by lender and state.</p>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Want a lender to review your situation?</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              If you share a few details, we’ll connect you with licensed professionals who can explain options in your
              state.
            </p>
          </div>
          <CTAButton href="/get-help">Get personalized help</CTAButton>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Still exploring? Try the <Link className="underline" href="/calculator">calculator</Link> for an estimate.
        </p>
      </section>
    </div>
  );
}

