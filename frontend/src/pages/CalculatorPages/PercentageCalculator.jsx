import React, { useState } from "react";

export const PercentageCalculator = () => {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    const n = parseFloat(number);
    const p = parseFloat(percentage);

    if (isNaN(n) || isNaN(p)) {
      setResult(null);
      return;
    }

    const calculated = (n * p) / 100;
    setResult(calculated.toFixed(2));
  };

  return (
    <div className="max-w-md mt-4 mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Percentage Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="Enter a number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Percentage (%)
        </label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="Enter percentage"
        />
      </div>

      <button
        onClick={calculatePercentage}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="mt-6 text-gray-800 space-y-2">
          <p>
            <strong>Result:</strong> {percentage}% of {number} is <strong>{result}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

