import Link from "next/link";

const FOOTER_DISCLAIMER =
  "MobileHomeLoanHelp.com is an educational resource and lead referral service operated by Momentum Growth Partners LLC. We are not a lender and do not make credit decisions. All loan information is educational and subject to change. Rates, terms, and loan availability vary by lender, credit profile, and property characteristics. Consult with licensed financial professionals before making borrowing decisions. Our partner lenders are licensed in their respective states. NMLS Consumer Access: www.nmlsconsumeraccess.org";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-gray-900">MobileHomeLoanHelp</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Helpful, educational guidance for manufactured and mobile home financing.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Resources</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/calculator">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/requirements">
                  Requirements
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/leased-land">
                  Leased Land Guide
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/bad-credit">
                  Bad Credit Options
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Company</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Get help</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Want lender options tailored to your state and situation?
            </p>
            <Link
              href="/get-help"
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900"
            >
              Request help
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-600">
          <div className="font-semibold text-gray-800">Important disclaimer</div>
          <p className="mt-2">{FOOTER_DISCLAIMER}</p>
          <p className="mt-2 text-xs text-gray-500">Information current as of January 2026.</p>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Momentum Growth Partners LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

