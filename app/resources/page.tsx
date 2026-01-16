import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources (Manufactured Home Financing)",
  description:
    "Educational resources for manufactured/mobile home financing, including consumer protection and program references. We are not a lender.",
  alternates: { canonical: "/resources" }
};

type Resource = {
  title: string;
  description: string;
  href: string;
  note?: string;
};

const RESOURCES: Resource[] = [
  {
    title: "NMLS Consumer Access",
    description: "Verify lender/broker licensing and view public NMLS records.",
    href: "https://www.nmlsconsumeraccess.org/"
  },
  {
    title: "HUD Manufactured Housing Program",
    description: "Official HUD information on manufactured housing standards and HUD code homes.",
    href: "https://www.hud.gov/program_offices/housing/rmra/mhs"
  },
  {
    title: "CFPB (Consumer Financial Protection Bureau)",
    description: "Consumer education on mortgages, loans, and financial protections.",
    href: "https://www.consumerfinance.gov/"
  },
  {
    title: "FHA (Federal Housing Administration) overview",
    description: "High-level program info and consumer education.",
    href: "https://www.hud.gov/buying/loans"
  },
  {
    title: "VA Home Loans (official)",
    description: "VA home loan program information (eligibility varies; property requirements apply).",
    href: "https://www.va.gov/housing-assistance/home-loans/"
  },
  {
    title: "USDA Rural Development (official)",
    description: "USDA loan resources and eligibility tools (availability varies by location and program).",
    href: "https://www.rd.usda.gov/"
  }
];

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          These links are here to help you research manufactured/mobile home financing from authoritative sources. We’re
          not a lender and we don’t provide financial advice.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {RESOURCES.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-gray-300"
          >
            <div className="text-sm font-semibold text-gray-900">{r.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.description}</p>
            {r.note ? <p className="mt-2 text-xs text-gray-500">{r.note}</p> : null}
            <div className="mt-3 text-xs font-semibold text-brand-blue">Open resource</div>
          </a>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <div className="text-sm font-semibold text-gray-900">Helpful internal guides</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            <Link className="font-semibold underline" href="/requirements">
              Typical requirements
            </Link>{" "}
            (varies by lender and state)
          </li>
          <li>
            <Link className="font-semibold underline" href="/leased-land">
              Leased land & chattel loans
            </Link>
          </li>
          <li>
            <Link className="font-semibold underline" href="/bad-credit">
              Bad credit options
            </Link>
          </li>
          <li>
            <Link className="font-semibold underline" href="/calculator">
              Calculator (educational)
            </Link>
          </li>
          <li>
            <Link className="font-semibold underline" href="/states">
              Browse by state
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

