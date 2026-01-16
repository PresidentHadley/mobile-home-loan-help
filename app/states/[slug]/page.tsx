import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  const title = `Mobile Home Loans in ${state.name} | Manufactured Home Financing Guide`;
  const description = `Educational guide to manufactured/mobile home financing in ${state.name}. Learn options for leased land vs owned land, typical requirements, and request help from licensed partners.`;

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

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

export default function StateLandingPage({ params }: Props) {
  const state = getStateLandingBySlug(params.slug);
  if (!state) return notFound();

  const isCalifornia = state.slug === "california";

  const caFaq = [
    {
      question: "Can I get a loan for a mobile home on leased land in California?",
      answer:
        "Often yes, but it’s usually not a traditional mortgage because the land is leased. In-park/leased-land purchases commonly use chattel-style financing or other specialized manufactured home programs. Availability and requirements vary by lender, park, and borrower profile."
    },
    {
      question: "Can I get a mortgage on leased land in California?",
      answer:
        "Usually not a standard mortgage, since many mortgage programs require the land and home to be secured as real estate. In leased-land situations, lenders more commonly use personal-property style loans. Some exceptions may exist depending on the property and lender, but it varies."
    },
    {
      question: "How much is lot rent (land lease) in California mobile home parks?",
      answer:
        "It varies widely by city and park. Before buying, confirm the current lot rent, what’s included (utilities/fees), and how increases are handled in the park lease. Lot rent is a key part of affordability alongside the loan payment."
    },
    {
      question: "Is a manufactured home in a California park a good investment?",
      answer:
        "It depends. Many buyers choose parks for affordability and lifestyle, but lot rent increases, park rules, home condition, and local demand can affect long-term value. Treat it as a full-cost decision (home payment + lot rent + utilities/fees), and consult licensed professionals for your specific scenario."
    }
  ] as const;

  const caFaqJsonLd = isCalifornia
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: caFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    : null;

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          Educational guide • Requirements vary by lender and state
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mobile Home Loans in {state.name}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-600">
          This page explains common manufactured/mobile home financing paths in {state.name} in plain language. We’re
          not a lender — we share educational info and can connect you with lending partners licensed in your state.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CTAButton href="#get-help">Get help in {state.name}</CTAButton>
          <Link className="text-sm font-semibold text-gray-800 underline underline-offset-4" href="/calculator">
            Try the calculator
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <SectionCard title={`How manufactured home financing works in ${state.name}`}>
            <p>
              Most lenders will first look at <span className="font-semibold text-gray-800">property type</span> (leased
              land vs owned land), <span className="font-semibold text-gray-800">home age/condition</span>, and your{" "}
              <span className="font-semibold text-gray-800">credit/income</span>. Those factors often determine which
              loan programs might fit.
            </p>
            <p>
              If you’re early in the process, focus on identifying whether the home is on{" "}
              <Link className="font-semibold underline" href="/leased-land">
                leased land
              </Link>{" "}
              and whether it’s{" "}
              <Link className="font-semibold underline" href="/new-vs-used">
                new vs used
              </Link>
              . Those two details can change lender options significantly.
            </p>
          </SectionCard>

          <SectionCard title="Common financing paths (high level)">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-gray-800">Chattel loans</span>: common for parks/leased land (varies
                by lender and state).
              </li>
              <li>
                <span className="font-semibold text-gray-800">Manufactured home mortgages</span>: more common when you
                own the land and the home qualifies as real property.
              </li>
              <li>
                <span className="font-semibold text-gray-800">More flexible programs</span> may exist depending on home
                type, down payment, and credit profile.
              </li>
            </ul>
            <p className="text-xs text-gray-500">
              We avoid quoting rates here because they change constantly. Your rate depends on credit and other factors.
            </p>
          </SectionCard>

          <SectionCard title="Typical requirements (educational)">
            <ul className="list-disc space-y-2 pl-5">
              <li>Credit score guidelines vary; many programs target around 580+, but exceptions may exist.</li>
              <li>Down payments are often in the 5%–30% range depending on the scenario.</li>
              <li>Lenders typically verify income and evaluate debt-to-income (DTI).</li>
              <li>Home age, HUD code status, and condition can impact eligibility.</li>
            </ul>
            <p>
              For a more general overview, see{" "}
              <Link className="font-semibold underline" href="/requirements">
                typical requirements
              </Link>
              .
            </p>
          </SectionCard>

          <SectionCard title="FAQs">
            <p>
              <span className="font-semibold text-gray-800">Do I have to own land?</span> Not always. Many borrowers buy
              in parks with leased land, but financing structure can differ. See our{" "}
              <Link className="font-semibold underline" href="/leased-land">
                leased land guide
              </Link>
              .
            </p>
            <p>
              <span className="font-semibold text-gray-800">Can I get a loan with bad credit?</span> Sometimes, yes.
              Expect tradeoffs like higher rates or more cash down. Learn more on{" "}
              <Link className="font-semibold underline" href="/bad-credit">
                bad credit options
              </Link>
              .
            </p>
            <p>
              <span className="font-semibold text-gray-800">What documents will I need?</span> Often ID, proof of
              income, bank statements, and home/land details — but exact requirements vary by lender.
            </p>
          </SectionCard>

          {isCalifornia ? (
            <SectionCard title="California park / leased-land FAQ">
              <p className="text-gray-600">
                These are common questions people search for when looking for <span className="font-semibold text-gray-800">mobile home loans in California parks</span>.
                Answers are educational and vary by lender and park.
              </p>
              <div className="mt-3 space-y-4">
                {caFaq.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-base font-bold text-gray-900">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700">
                Want help narrowing options?{" "}
                <Link className="font-semibold underline" href="#get-help">
                  Request help in California
                </Link>{" "}
                or read our{" "}
                <Link className="font-semibold underline" href="/leased-land">
                  leased land guide
                </Link>
                .
              </p>
            </SectionCard>
          ) : null}
        </div>

        <div id="get-help" className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6">
          <div className="text-sm font-semibold text-gray-900">Get help in {state.name}</div>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Share a few details and we’ll connect you with lending partners licensed in {state.name}. No obligation to
            accept any offer.
          </p>
          <div className="mt-5">
            <LeadForm sourcePage={`/states/${state.slug}`} prefillState={state.code} prefillPropertyState={state.code} />
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Prefer to browse first? Try the <Link className="underline" href="/calculator">calculator</Link> or review{" "}
            <Link className="underline" href="/requirements">requirements</Link>.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
        Looking for another state? Visit <Link className="font-semibold underline" href="/states">Browse by State</Link>.
      </div>

      {caFaqJsonLd ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caFaqJsonLd) }}
        />
      ) : null}
    </div>
  );
}

