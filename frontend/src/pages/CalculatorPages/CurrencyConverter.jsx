import React, { useState } from "react";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Mock exchange rates (base: USD)
  const exchangeRates = {
    USD: 1,
    PKR: 277.54,
    EUR: 0.91,
    GBP: 0.78,
    INR: 83.32,
    AED: 3.67,
    CNY: 7.25
  };

  const convert = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum)) {
      setConvertedAmount(null);
      return;
    }

    const inUSD = amountNum / exchangeRates[fromCurrency];
    const finalAmount = inUSD * exchangeRates[toCurrency];
    setConvertedAmount(finalAmount.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Currency Converter</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="e.g. 100"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            {Object.keys(exchangeRates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            {Object.keys(exchangeRates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={convert}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Convert
      </button>

      {convertedAmount !== null && (
        <div className="mt-6 text-gray-800 text-center space-y-1">
          <p>
            <strong>Converted:</strong> {amount} {fromCurrency} ={" "}
            <span className="text-[#3190ce] font-bold">{convertedAmount}</span>{" "}
            {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};
