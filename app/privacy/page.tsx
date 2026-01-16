import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for MobileHomeLoanHelp.com. Learn what data we collect, how we use it, how it may be shared with licensed lenders, and your choices.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-semibold">Effective:</span> January 2026
        </p>
      </div>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <p>
          MobileHomeLoanHelp.com (“we,” “us,” “our”) is an educational resource and lead referral service operated by
          Momentum Growth Partners LLC. We are not a lender and do not make credit decisions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Information we collect</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
          <li>
            <span className="font-semibold">Contact & inquiry details</span>: name, email, phone, state, property state,
            home type, credit range, timeline, and any additional information you provide.
          </li>
          <li>
            <span className="font-semibold">Technical data</span>: IP address, user agent, and basic request metadata to
            help prevent abuse and support our service.
          </li>
          <li>
            <span className="font-semibold">Analytics</span>: we may use privacy-friendly analytics to understand site
            usage (e.g., which pages are most helpful).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">How we use your information</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
          <li>
            <span className="font-semibold">To respond to your request</span> and connect you with licensed lending
            partners.
          </li>
          <li>
            <span className="font-semibold">To improve our content</span> and site experience.
          </li>
          <li>
            <span className="font-semibold">To prevent fraud/abuse</span> and maintain security.
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Sharing your information</h2>
        <p>
          If you submit our “Get Help” form, we may share your information with{" "}
          <span className="font-semibold">state-licensed lenders or brokers</span> so they can contact you about your
          inquiry. Sharing and availability may vary by lender and state.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">TCPA / contact consent</h2>
        <p>
          By submitting your information, you authorize MobileHomeLoanHelp.com and our licensed lending partners to
          contact you via phone, email, or SMS regarding your inquiry. You are under no obligation to accept any loan
          offer. Message and data rates may apply depending on your carrier.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Your choices & rights</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
          <li>
            <span className="font-semibold">Opt-out</span>: You may opt out of communications at any time by replying
            “STOP” to SMS messages (if applicable) or contacting us.
          </li>
          <li>
            <span className="font-semibold">Access / deletion requests</span>: You can request access to or deletion of
            your information, subject to legal and operational requirements.
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Data retention</h2>
        <p>
          We retain information for as long as necessary to provide the service, comply with legal obligations, resolve
          disputes, and enforce agreements.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Security</h2>
        <p>
          We use reasonable safeguards to protect your information. No system is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>
          For privacy requests or questions, contact us at{" "}
          <a className="font-semibold underline" href="mailto:patrick@mgphq.com">
            patrick@mgphq.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

