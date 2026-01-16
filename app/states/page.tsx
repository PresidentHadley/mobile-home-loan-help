import type { Metadata } from "next";
import Link from "next/link";
import { PRIORITY_STATES } from "@/lib/state-landings";

export const metadata: Metadata = {
  title: "Mobile Home Loan Help by State",
  description:
    "Browse manufactured/mobile home financing guides by state. Learn typical options and connect with licensed lending partners.",
  alternates: { canonical: "/states" }
};

export default function StatesIndexPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Browse by State</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          These pages share educational guidance about manufactured/mobile home financing. Requirements and options vary
          by lender and state.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRIORITY_STATES.map((s) => (
          <Link
            key={s.slug}
            href={`/states/${s.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300"
          >
            <div className="text-sm font-semibold text-gray-900">{s.name}</div>
            <div className="mt-1 text-sm text-gray-600">Manufactured home financing guide</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

