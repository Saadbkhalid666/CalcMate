import React, { useState } from "react";

export const LoanEMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const termMonths = parseFloat(loanTerm);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(termMonths)) {
      setEmi(null);
      setTotalInterest(null);
      setTotalPayment(null);
      return;
    }

    const monthlyRate = annualRate / 12 / 100;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);

    const totalAmt = emiValue * termMonths;
    const interest = totalAmt - principal;

    setEmi(emiValue.toFixed(2));
    setTotalPayment(totalAmt.toFixed(2));
    setTotalInterest(interest.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Loan & EMI Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loan Amount (Rs)
        </label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="e.g. 500000"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Interest Rate (Annual %)
        </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="e.g. 7.5"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loan Term (Months)
        </label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="e.g. 60"
        />
      </div>

      <button
        onClick={calculateEMI}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Calculate
      </button>

      {emi && (
        <div className="mt-6 text-gray-800 space-y-2">
          <p>
            <strong>Monthly EMI:</strong> Rs {emi}
          </p>
          <p>
            <strong>Total Interest Payable:</strong> Rs {totalInterest}
          </p>
          <p>
            <strong>Total Payment (Principal + Interest):</strong> Rs {totalPayment}
          </p>
        </div>
      )}
    </div>
  );
};

 
