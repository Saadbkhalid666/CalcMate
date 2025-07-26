import React, { useState } from "react";

export const TimeDurationCalculator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState(null);

  const calculateDuration = () => {
    if (!start || !end) {
      setResult(null);
      return;
    }

    const startTime = new Date(start);
    const endTime = new Date(end);

    if (startTime > endTime) {
      setResult("Start time must be before end time.");
      return;
    }

    let diff = (endTime - startTime) / 1000; // total seconds

    const days = Math.floor(diff / (24 * 3600));
    diff %= 24 * 3600;

    const hours = Math.floor(diff / 3600);
    diff %= 3600;

    const minutes = Math.floor(diff / 60);
    const seconds = Math.floor(diff % 60);

    setResult({ days, hours, minutes, seconds });
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 px-4">

    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Time Duration Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time</label>
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3190ce]"
        />
      </div>

      <button
        onClick={calculateDuration}
        className="w-full bg-[#3190ce] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Calculate Duration
      </button>

      {result && typeof result === "object" ? (
        <div className="mt-6 text-gray-800 space-y-1">
          <p><strong>Duration:</strong></p>
          <p>{result.days} Days, {result.hours} Hours</p>
          <p>{result.minutes} Minutes, {result.seconds} Seconds</p>
        </div>
      ) : result === null ? null : (
        <p className="mt-6 text-red-600">{result}</p>
      )}
    </div>
    </div>
  );
};
