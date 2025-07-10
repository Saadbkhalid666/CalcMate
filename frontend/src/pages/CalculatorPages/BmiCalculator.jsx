import React, { useState } from "react";

export const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h === 0) {
      setBmi(null);
      setCategory("");
      return;
    }

    const heightInMeters = h / 100;
    const calculatedBMI = w / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(1);

    let bmiCategory = "";
    if (calculatedBMI < 18.5) {
      bmiCategory = "Underweight";
    } else if (calculatedBMI < 24.9) {
      bmiCategory = "Normal";
    } else if (calculatedBMI < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }

    setBmi(roundedBMI);
    setCategory(bmiCategory);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">BMI Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Height (cm)
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="e.g. 170"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
          placeholder="e.g. 65"
        />
      </div>

      <button
        onClick={calculateBMI}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Calculate
      </button>

      {bmi && (
        <div className="mt-6 text-gray-800 space-y-2">
          <p>
            <strong>Your BMI:</strong> {bmi}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
        </div>
      )}
    </div>
  );
};
