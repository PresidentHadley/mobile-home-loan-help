"use client";

import { useMemo, useState } from "react";
import { calculateLoan, formatCurrency, type LoanTermYears } from "@/lib/calculations";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { CTAButton } from "@/components/CTAButton";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function Calculator() {
  const [homePrice, setHomePrice] = useState<number>(120_000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(10);
  const [interestRatePercent, setInterestRatePercent] = useState<number>(9);
  const [loanTermYears, setLoanTermYears] = useState<LoanTermYears>(20);

  const outputs = useMemo(
    () =>
      calculateLoan({
        homePrice,
        downPaymentPercent,
        interestRatePercent,
        loanTermYears
      }),
    [homePrice, downPaymentPercent, interestRatePercent, loanTermYears]
  );

  return (
    <div className="space-y-6">
      <DisclaimerBox title="⚠️ Educational Estimates Only">
        This calculator provides rough estimates for educational purposes. Actual loan terms depend on your credit,
        income, property type, down payment, and lender requirements. Results do not constitute a loan offer or rate
        guarantee. Consult with a licensed lender for accurate quotes.
      </DisclaimerBox>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-gray-900">Inputs</div>

          <div className="mt-4 space-y-5">
            <div>
              <div className="flex items-end justify-between gap-3">
                <label className="text-sm font-medium text-gray-700" htmlFor="homePrice">
                  Home price
                </label>
                <input
                  id="homePrice"
                  inputMode="numeric"
                  className="w-36 rounded-xl border border-gray-200 bg-white px-3 py-2 text-right text-sm font-semibold text-gray-900"
                  value={homePrice}
                  onChange={(e) => setHomePrice(clamp(Number(e.target.value || 0), 20_000, 300_000))}
                />
              </div>
              <input
                className="mt-3 w-full"
                type="range"
                min={20_000}
                max={300_000}
                step={1000}
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                aria-label="Home price"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>$20k</span>
                <span>$300k</span>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between gap-3">
                <label className="text-sm font-medium text-gray-700" htmlFor="downPayment">
                  Down payment (%)
                </label>
                <input
                  id="downPayment"
                  inputMode="decimal"
                  className="w-36 rounded-xl border border-gray-200 bg-white px-3 py-2 text-right text-sm font-semibold text-gray-900"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(clamp(Number(e.target.value || 0), 5, 30))}
                />
              </div>
              <input
                className="mt-3 w-full"
                type="range"
                min={5}
                max={30}
                step={0.5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                aria-label="Down payment percent"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between gap-3">
                <label className="text-sm font-medium text-gray-700" htmlFor="interestRate">
                  Interest rate (%)
                </label>
                <input
                  id="interestRate"
                  inputMode="decimal"
                  className="w-36 rounded-xl border border-gray-200 bg-white px-3 py-2 text-right text-sm font-semibold text-gray-900"
                  value={interestRatePercent}
                  onChange={(e) => setInterestRatePercent(clamp(Number(e.target.value || 0), 6, 12))}
                />
              </div>
              <input
                className="mt-3 w-full"
                type="range"
                min={6}
                max={12}
                step={0.1}
                value={interestRatePercent}
                onChange={(e) => setInterestRatePercent(Number(e.target.value))}
                aria-label="Interest rate percent"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>6%</span>
                <span>12%</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Rates shown are examples only — your rate depends on credit and other factors.
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="loanTerm">
                Loan term
              </label>
              <select
                id="loanTerm"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value) as LoanTermYears)}
              >
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
              </select>
              <p className="mt-2 text-xs text-gray-500">Terms vary by lender and state.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-gray-900">Estimated results</div>
          <dl className="mt-4 grid gap-4">
            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
              <dt className="text-sm font-medium text-gray-700">Monthly payment</dt>
              <dd className="text-lg font-bold text-gray-900">{formatCurrency(outputs.monthlyPayment)}</dd>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5">
                <dt className="text-xs font-semibold text-gray-500">Down payment amount</dt>
                <dd className="mt-1 text-base font-bold text-gray-900">{formatCurrency(outputs.downPaymentAmount)}</dd>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <dt className="text-xs font-semibold text-gray-500">Loan amount</dt>
                <dd className="mt-1 text-base font-bold text-gray-900">{formatCurrency(outputs.loanAmount)}</dd>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <dt className="text-xs font-semibold text-gray-500">Total interest</dt>
                <dd className="mt-1 text-base font-bold text-gray-900">{formatCurrency(outputs.totalInterest)}</dd>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <dt className="text-xs font-semibold text-gray-500">Total cost</dt>
                <dd className="mt-1 text-base font-bold text-gray-900">{formatCurrency(outputs.totalCost)}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">Want accurate quotes?</div>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              A licensed lender can review your credit, income, and property details and explain real options available
              in your state.
            </p>
            <div className="mt-3">
              <CTAButton href="/get-help">Connect with a lender</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

