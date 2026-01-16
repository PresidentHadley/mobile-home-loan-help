import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Leased Land & Mobile Home Parks (Chattel Loans Explained)",
  description:
    "Learn how financing works for leased land/mobile home parks, why traditional mortgages often don’t apply, and what chattel loans are. Varies by lender and state.",
  alternates: { canonical: "/leased-land" }
};

export default function LeasedLandPage() {
  const faq = [
    {
      question: "Is a manufactured home on leased land a good investment?",
      answer:
        "It depends on your goals, budget, and the specific park. Leased land can offer a lower purchase price than land-owned property, but factors like lot rent increases, park rules, home age/condition, and resale demand can impact long-term value. Consider it a lifestyle/affordability decision first, and ask a licensed professional to review your full costs."
    },
    {
      question: "Can you put a mobile home on leased land?",
      answer:
        "Often yes — many buyers place or purchase homes in mobile home parks where the land is leased. The key is that the park must approve the home and the buyer, and financing options can differ from land-owned scenarios. Requirements vary by park, lender, and state."
    },
    {
      question: "How much is a land lease for a mobile home?",
      answer:
        "Lot rent varies widely by location and park. It can include (or exclude) utilities, trash, water/sewer, and community fees. Always confirm the current lot rent, what’s included, and how increases are handled in the lease before buying."
    },
    {
      question: "Can I get a mortgage on leased land?",
      answer:
        "Usually not a traditional mortgage, because many mortgage programs require the land and home to be secured as real estate. In leased-land situations, chattel-style financing is often more common. Some exceptions may exist depending on the property and lender, but it varies by lender and state."
    }
  ] as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leased Land Guide</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Buying a manufactured home in a park (leased land) is common — and it changes how financing works.
        </p>
      </div>

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
            be common for leased-land situations. Terms, pricing, and requirements vary by lender and credit profile.
          </p>
          <p className="mt-3 text-xs text-gray-500">We avoid quoting pricing examples because they change and vary widely.</p>
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
                <li>Total borrowing costs can be higher than traditional mortgages</li>
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

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Leased land FAQ</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Quick answers to common questions people search for. These are educational and can vary by lender, park, and
          state.
        </p>

        <div className="mt-6 space-y-6">
          {faq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-base font-bold text-gray-900">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-700">
          Want state-specific guidance? Start here:{" "}
          <Link className="font-semibold underline" href="/states/california">
            California manufactured home financing
          </Link>{" "}
          (and{" "}
          <Link className="font-semibold underline" href="/states">
            other states
          </Link>
          ).
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}

