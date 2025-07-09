import React, { useState } from "react";

export const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState(null);
  const [netIncome, setNetIncome] = useState(null);

  const calculateTax = () => {
    const incomeVal = parseFloat(income);
    const rateVal = parseFloat(taxRate);

    if (isNaN(incomeVal) || isNaN(rateVal)) {
      setTaxAmount(null);
      setNetIncome(null);
      return;
    }

    const tax = (incomeVal * rateVal) / 100;
    const net = incomeVal - tax;

    setTaxAmount(tax.toFixed(2));
    setNetIncome(net.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Tax Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Income</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="e.g. 100000"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
          placeholder="e.g. 15"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
        />
      </div>

      <button
        onClick={calculateTax}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Calculate
      </button>

      {taxAmount !== null && netIncome !== null && (
        <div className="mt-6 text-gray-800 text-center space-y-2">
          <p>
            <strong>Tax Amount:</strong>{" "}
            <span className="text-red-600 font-semibold">{taxAmount}</span>
          </p>
          <p>
            <strong>Net Income:</strong>{" "}
            <span className="text-green-600 font-semibold">{netIncome}</span>
          </p>
        </div>
      )}
    </div>
  );
};
