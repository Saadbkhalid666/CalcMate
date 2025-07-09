import React, { useState, useEffect } from "react";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencyList, setCurrencyList] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/symbols", {
      method: "GET",
      headers: {
        apikey: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.symbols) {
          setCurrencyList(data.symbols);
        }
      })
      .catch((err) => console.error("Failed to fetch symbols:", err));
  }, []);

  const convert = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setConvertedAmount(null);
      return;
    }

    setLoading(true);

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
      {
        method: "GET",
        headers: {
          apikey: API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setConvertedAmount(data.result.toFixed(2));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Conversion failed:", err);
        setLoading(false);
      });
  };

  if (!currencyList || Object.keys(currencyList).length === 0) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading currency list...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Currency Converter</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            {Object.entries(currencyList).map(([code, { description }]) => (
              <option key={code} value={code}>
                {code} - {description}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            {Object.entries(currencyList).map(([code, { description }]) => (
              <option key={code} value={code}>
                {code} - {description}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={convert}
        disabled={loading}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        {loading ? "Converting..." : "Convert"}
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
