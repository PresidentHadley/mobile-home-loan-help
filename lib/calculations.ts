export type LoanTermYears = 10 | 15 | 20 | 25;

export type CalculatorInputs = {
  homePrice: number;
  downPaymentPercent: number;
  interestRatePercent: number;
  loanTermYears: LoanTermYears;
};

export type CalculatorOutputs = {
  downPaymentAmount: number;
  loanAmount: number;
  monthlyPayment: number;
  totalPaid: number;
  totalInterest: number;
  totalCost: number;
};

export function calculateLoan({
  homePrice,
  downPaymentPercent,
  interestRatePercent,
  loanTermYears
}: CalculatorInputs): CalculatorOutputs {
  const safeHomePrice = Math.max(0, Number.isFinite(homePrice) ? homePrice : 0);
  const safeDown = Math.min(100, Math.max(0, Number.isFinite(downPaymentPercent) ? downPaymentPercent : 0));
  const safeRate = Math.max(0, Number.isFinite(interestRatePercent) ? interestRatePercent : 0);
  const safeTerm = loanTermYears;

  const downPaymentAmount = safeHomePrice * (safeDown / 100);
  const loanAmount = Math.max(0, safeHomePrice - downPaymentAmount);

  const monthlyRate = safeRate / 100 / 12;
  const numPayments = safeTerm * 12;

  let monthlyPayment = 0;
  if (loanAmount === 0) {
    monthlyPayment = 0;
  } else if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numPayments;
  } else {
    const pow = Math.pow(1 + monthlyRate, numPayments);
    monthlyPayment = (loanAmount * (monthlyRate * pow)) / (pow - 1);
  }

  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = Math.max(0, totalPaid - loanAmount);
  const totalCost = downPaymentAmount + totalPaid;

  return {
    downPaymentAmount,
    loanAmount,
    monthlyPayment,
    totalPaid,
    totalInterest,
    totalCost
  };
}

export function formatCurrency(n: number): string {
  const value = Number.isFinite(n) ? n : 0;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

