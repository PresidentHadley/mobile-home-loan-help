import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for MobileHomeLoanHelp.com. Educational resource disclaimer, third-party lender disclosure, limitations, and dispute resolution.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-semibold">Effective:</span> January 2026
        </p>
      </div>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">1. Educational resource (not a lender)</h2>
        <p>
          MobileHomeLoanHelp.com is an educational resource and lead referral service operated by Momentum Growth
          Partners LLC. We are not a lender, do not make credit decisions, and do not provide financial advice.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">2. No guarantees</h2>
        <p>
          We do not guarantee loan approval, rates, terms, or availability. Information on this site is educational and
          may change without notice. Requirements vary by lender and state.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">3. Third-party lender disclosure</h2>
        <p>
          If you submit a request for help, your information may be shared with state-licensed lenders or brokers who
          may contact you directly. Any loan offers, quotes, or decisions are made solely by those third parties.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">4. Calculator disclaimer</h2>
        <p>
          Our calculator provides rough estimates for educational purposes only. Results do not constitute a loan offer
          or rate guarantee.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">5. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any damages arising from your use of the site,
          your reliance on educational content, or interactions with third-party lenders/brokers.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">6. Dispute resolution</h2>
        <p>
          Any disputes will be handled in accordance with applicable law. If a dispute arises, you agree to attempt to
          resolve it informally first by contacting us.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">7. Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a className="font-semibold underline" href="mailto:patrick@mgphq.com">
            patrick@mgphq.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

