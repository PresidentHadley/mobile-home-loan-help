import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "New vs Used Manufactured Home Financing (What Changes)",
  description:
    "Learn how financing differs for new vs used manufactured/mobile homes, including HUD code age guidelines, condition requirements, and typical cost differences. Varies by lender and state.",
  alternates: { canonical: "/new-vs-used" }
};

export default function NewVsUsedPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">New vs Used: Financing Differences</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Whether a home is new or used can impact lender options, required documentation, and sometimes overall borrowing costs.
          <span className="text-gray-500"> (Varies by lender and state.)</span>
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">HUD code (1976) — why it matters</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Many lenders prefer homes built after 1976 (HUD-code manufactured homes). Older “mobile homes” can have more
            limited financing options. Requirements vary by lender and state.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Condition requirements (used homes)</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Used homes may require inspections or proof of habitability. Items like roof condition, plumbing/electrical,
            tie-downs/foundation, and overall safety can affect financing. Requirements vary by lender.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Typical cost differences (educational)</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Used homes or leased-land/chattel scenarios can sometimes have higher total borrowing costs than newer homes
            with land ownership. Your pricing depends on credit, down payment, property type, and lender guidelines.
          </p>
          <p className="mt-3 text-xs text-gray-500">We avoid quoting pricing ranges because they change and vary widely.</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">New homes: what’s usually easier</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Clear documentation (title, HUD tags, manufacturer info)</li>
            <li>Less condition risk vs older used homes</li>
            <li>More lender comfort in many programs</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">Still varies by lender and state.</p>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Want help comparing options?</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We can connect you with a licensed professional who can review the home type and land situation and walk
              you through realistic options.
            </p>
          </div>
          <CTAButton href="/get-help">Get personalized help</CTAButton>
        </div>
      </section>
    </div>
  );
}

