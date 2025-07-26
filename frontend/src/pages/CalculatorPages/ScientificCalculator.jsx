import React, { useState } from "react";

export const ScientificCalculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      // Replace operators with JS equivalents
      let exp = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, Math.PI)
        .replace(/√/g, "Math.sqrt")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan");

      const result = eval(exp);
      setExpression(result.toString());
    } catch {
      setExpression("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "÷", "√(",
    "4", "5", "6", "×", "x²",
    "1", "2", "3", "-", "%",
    "0", ".", "π", "+", "=",
    "sin(", "cos(", "tan(", "log(", "ln(",
    "(", ")", "DEL", "C"
  ];

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 px-4">

    <div className="max-w-md mx-auto bg-white border shadow-md p-4 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-[#3190ce]">Scientific Calculator</h2>

      <input
        type="text"
        value={expression}
        readOnly
        className="w-full mb-4 text-xl px-3 py-2 border rounded-md bg-gray-50"
      />

      <div className="grid grid-cols-5 gap-2">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => {
              if (btn === "C") handleClear();
              else if (btn === "DEL") handleDelete();
              else if (btn === "=") handleEvaluate();
              else if (btn === "x²") handleClick("**2");
              else handleClick(btn);
            }}
            className="bg-[#3190ce] text-white py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};
