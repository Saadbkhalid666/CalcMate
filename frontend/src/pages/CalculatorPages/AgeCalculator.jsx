import React, { useState } from "react";

export const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [ageResult, setAgeResult] = useState(null);

  const calculateAge = () => {
    if (!dob) {
      setAgeResult(null);
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // previous month days
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult({ years, months, days });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Age Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
        />
      </div>

      <button
        onClick={calculateAge}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Calculate Age
      </button>

      {ageResult && (
        <div className="mt-6 text-gray-800 space-y-2">
          <p>
            <strong>Your Age:</strong> {ageResult.years} years, {ageResult.months} months, {ageResult.days} days
          </p>
        </div>
      )}
    </div>
  );
};
