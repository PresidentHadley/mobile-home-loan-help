import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calculator } from "@/components/Calculator";
import { LeadForm } from "@/components/LeadForm";
import { CTAButton } from "@/components/CTAButton";
import { getStateLandingBySlug, PRIORITY_STATES } from "@/lib/state-landings";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PRIORITY_STATES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const state = getStateLandingBySlug(params.slug);
  if (!state) return {};

  const title = `Mobile Home Loans in ${state.name} | Educational Guide`;
  const description = `Educational guide to mobile home loans in ${state.name}. Learn typical requirements, financing options, and use the calculator. Connect with lending partners licensed in your state.`;

  return {
    title,
    description,
    alternates: { canonical: `/states/${state.slug}` },
    openGraph: {
      title,
      description,
      url: `/states/${state.slug}`
    }
  };
}

function getUniqueStateNote(slug: string) {
  switch (slug) {
    case "california":
      return "In some areas, insurance and park rules can meaningfully impact affordability.";
    case "florida":
      return "Storm-related insurance and park requirements can affect the overall monthly budget.";
    case "texas":
      return "Land type (owned vs park) and home placement details often shape lender options.";
    default:
      return "Land type (owned vs park) and home age/condition often shape lender options.";
  }
}

function getPopularSearchRegions(slug: string): string[] {
  switch (slug) {
    case "california":
      return ["Southern California (LA/OC/Inland Empire)", "San Diego County", "Bay Area", "Sacramento area", "Central Valley"];
    case "florida":
      return ["Tampa Bay", "Orlando area", "Jacksonville area", "South Florida", "Space Coast"];
    case "georgia":
      return ["Metro Atlanta", "Savannah area", "Augusta area", "Macon area", "Columbus area"];
    case "louisiana":
      return ["Greater New Orleans", "Baton Rouge area", "Lafayette area", "Lake Charles area"];
    case "michigan":
      return ["Metro Detroit", "Grand Rapids area", "Lansing area", "Flint area", "West Michigan"];
    case "mississippi":
      return ["Gulf Coast", "Jackson metro", "Hattiesburg area", "North Mississippi"];
    case "missouri":
      return ["St. Louis metro", "Kansas City metro", "Springfield area", "Columbia area"];
    case "new-york":
      return ["Upstate NY (varies by county)", "Hudson Valley", "Western NY", "Capital Region"];
    case "ohio":
      return ["Columbus area", "Cleveland area", "Cincinnati area", "Dayton area", "Toledo area"];
    case "oklahoma":
      return ["Oklahoma City metro", "Tulsa metro", "Norman area", "Lawton area"];
    case "oregon":
      return ["Portland metro", "Willamette Valley", "Salem area", "Eugene area", "Southern Oregon"];
    case "pennsylvania":
      return ["Philadelphia area", "Pittsburgh area", "Central PA", "Lehigh Valley"];
    case "south-carolina":
      return ["Charleston area", "Greenville/Upstate", "Columbia area", "Myrtle Beach area"];
    case "virginia":
      return ["Northern Virginia", "Richmond area", "Hampton Roads", "Roanoke area"];
    default:
      return [];
  }
}

function FaqAccordion({
  items,
  stateName
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
  stateName: string;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        These answers are educational and can vary by lender, property type, and location in {stateName}.
      </p>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details key={item.q} className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
            <summary className="cursor-pointer text-sm font-semibold text-gray-900">{item.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function StateLandingPage({ params }: Props) {
  const state = getStateLandingBySlug(params.slug);
  if (!state) return notFound();

  const uniqueNote = getUniqueStateNote(state.slug);
  const popularRegions = getPopularSearchRegions(state.slug);

  const faqItems = [
    {
      q: `Can I get a mobile home loan with bad credit in ${state.name}?`,
      a: `Sometimes. Options depend on your full profile (income, down payment, credit history) and the property type. Many lenders focus on affordability and stability. If credit is a challenge, expect stricter documentation or more cash down — and talk with a licensed professional about realistic options.`
    },
    {
      q: `Do I need to own the land in ${state.name}?`,
      a: `Not always. Many mobile homes are in parks where the land is leased. Financing can look different in leased-land situations and some lenders specialize in those scenarios. Your best first step is confirming whether the home is on owned land or leased land.`
    },
    {
      q: `How much down payment do I need in ${state.name}?`,
      a: `Down payment requirements vary by lender and program. As a general rule, stronger credit and land-owned scenarios can open more flexibility. Leased-land or older used homes may require more cash down. A lender can tell you what applies to your specific home and location.`
    },
    {
      q: `Can I finance a used mobile home in ${state.name}?`,
      a: `Often yes, but eligibility depends on the home’s age, condition, documentation, and whether the land is owned or leased. Some lenders have minimum year/condition requirements. If you’re shopping used, get the year/make/model and land status early so a lender can confirm fit.`
    },
    {
      q: `How long does mobile home loan approval take in ${state.name}?`,
      a: `It depends on the lender, your documentation, and the property details. Having pay stubs/income docs, bank statements, and home/land information ready can speed things up. Timing is also affected by appraisal/inspection needs and park approvals (if applicable).`
    }
  ] as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  return (
    <div className="space-y-12">
      <section className="space-y-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Mobile Home Loans in {state.name}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-600">
          Get financing for manufactured homes in {state.name}. Check typical requirements, run educational estimates
          with our calculator, and connect with lending partners licensed in your state.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CTAButton href="#calculator">Calculator</CTAButton>
          <CTAButton href="#get-help" className="bg-brand-orange text-gray-900 hover:bg-amber-400">
            Get Help
          </CTAButton>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Quick requirements (typical)</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Requirements vary by lender and property type. This is a quick starting point to help you understand what
          lenders often look for.
        </p>
        <div className="mt-5 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
          <div className="flex gap-2">
            <span aria-hidden className="text-emerald-600">✓</span>
            <span>
              <span className="font-semibold text-gray-900">Credit score:</span> many programs often start around the
              high-500s to low-600s, depending on the scenario.
            </span>
          </div>
          <div className="flex gap-2">
            <span aria-hidden className="text-emerald-600">✓</span>
            <span>
              <span className="font-semibold text-gray-900">Down payment:</span> varies by lender; leased land and older
              used homes often require more.
            </span>
          </div>
          <div className="flex gap-2">
            <span aria-hidden className="text-emerald-600">✓</span>
            <span>
              <span className="font-semibold text-gray-900">Property type:</span> owned land vs park (leased land) can
              change lender options.
            </span>
          </div>
          <div className="flex gap-2">
            <span aria-hidden className="text-emerald-600">✓</span>
            <span>
              <span className="font-semibold text-gray-900">{state.name} note:</span> {uniqueNote}
            </span>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Want a deeper overview? See <Link className="underline" href="/requirements">typical requirements</Link> and{" "}
          <Link className="underline" href="/leased-land">leased land</Link>.
        </p>
      </section>

      <section id="calculator" className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">{state.name} calculator (educational)</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
          Use this tool to estimate a monthly payment. Actual loan terms depend on your credit, income, property
          details, down payment, and lender guidelines.
        </p>
        <div className="mt-6">
          <Calculator />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Financing options in {state.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Many borrowers explore options like manufactured-home mortgages (more common with land ownership), and
            chattel-style financing (more common for parks/leased land). Program names and guidelines vary by lender, so
            the best first step is matching the program type to your land situation and home details.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            If you’re not sure where you fit, start with our <Link className="font-semibold underline" href="/leased-land">leased land guide</Link> and{" "}
            <Link className="font-semibold underline" href="/new-vs-used">new vs used</Link>.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">{state.name} costs (what to budget for)</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Beyond the home price, your monthly budget can include insurance, taxes (if applicable), utilities, and lot
            rent if the home is in a park. These costs vary by location and property type, and they can change over
            time.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            If you’re buying on leased land, confirm the current lot rent and what’s included in writing before you
            commit.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Popular {state.name} search areas</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            People often start their search near major population centers. These are common areas buyers look when
            exploring manufactured housing options in {state.name}:
          </p>
          {popularRegions.length ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              {popularRegions.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Start near your preferred city/region and filter by land type (owned vs park) and home year/condition.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">What lenders look for</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Lenders typically evaluate affordability and stability: documented income, existing monthly obligations, and
            sufficient funds for down payment/closing costs. Property details matter too — year built, HUD tags/serial,
            condition, and whether the land is owned or leased.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Having your documents ready (ID, income docs, bank statements, and home/land info) can speed up the process.
          </p>
        </section>
      </section>

      <FaqAccordion items={faqItems} stateName={state.name} />

      <section id="get-help" className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">Get personalized help in {state.name}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
          Share a few details and we’ll connect you with lending partners licensed in {state.name}. No obligation to
          accept any offer.
        </p>
        <div className="mt-6">
          <LeadForm sourcePage={`/states/${state.slug}`} prefillState={state.code} prefillPropertyState={state.code} />
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Looking for another state? Visit <Link className="underline" href="/states">Browse by State</Link>.
        </p>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}

