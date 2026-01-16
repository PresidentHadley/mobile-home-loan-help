import type { Metadata } from "next";
import { Calculator } from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Mobile Home Loan Calculator (Educational Estimates)",
  description:
    "Estimate mobile/manufactured home loan payments. Educational estimates only — actual terms vary by lender, state, credit, income, and property type.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "Mobile Home Loan Calculator (Educational Estimates)",
    description:
      "Estimate mobile/manufactured home loan payments. Educational estimates only — actual terms vary by lender, state, credit, income, and property type.",
    url: "/calculator"
  }
};

export default function CalculatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loan Calculator</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
          Use this to get a rough payment estimate. Actual rates and terms depend on your credit, income, property
          details, down payment, and lender requirements.
        </p>
      </div>

      <Calculator />
    </div>
  );
}

