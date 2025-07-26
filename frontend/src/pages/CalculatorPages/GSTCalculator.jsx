import React, { useState } from "react";

export const GSTCalculator = () => {
  const [price, setPrice] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [gstAmount, setGstAmount] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateGST = () => {
    const p = parseFloat(price);
    const r = parseFloat(gstRate);

    if (isNaN(p) || isNaN(r)) {
      setGstAmount(null);
      setTotalPrice(null);
      return;
    }

    const gst = (p * r) / 100;
    const total = p + gst;

    setGstAmount(gst.toFixed(2));
    setTotalPrice(total.toFixed(2));
  };

  return (
    <div className="flex-grow flex items-center justify-center   px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">GST Calculator</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Original Price (Rs)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GST Rate (%)
          </label>
          <input
            type="number"
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
            placeholder="Enter GST rate"
          />
        </div>

        <button
          onClick={calculateGST}
          className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Calculate
        </button>

        {gstAmount !== null && totalPrice !== null && (
          <div className="mt-6 text-gray-800 space-y-2">
            <p>
              <strong>GST Amount:</strong> Rs {gstAmount}
            </p>
            <p>
              <strong>Total Price (incl. GST):</strong> Rs {totalPrice}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
