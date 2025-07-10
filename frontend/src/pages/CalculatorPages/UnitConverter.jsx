import { useState } from "react";

const units = {
  length: {
    meters: 1,
    kilometers: 0.001,
    feet: 3.28084,
    miles: 0.000621371,
  },
  weight: {
    grams: 1,
    kilograms: 0.001,
    pounds: 0.00220462,
    ounces: 0.035274,
  },
  temperature: "special",
};

export const UnitConverter = () => {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    if (category === "temperature") {
      convertTemperature();
      return;
    }

    const value = parseFloat(inputValue);
    if (isNaN(value)) return setResult("Please enter a valid number");

    const base = value / units[category][fromUnit];
    const converted = base * units[category][toUnit];
    setResult(`${converted.toFixed(4)} ${toUnit}`);
  };

  const convertTemperature = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return setResult("Invalid number");

    let converted;

    if (fromUnit === toUnit) {
      converted = value;
    } else if (fromUnit === "celsius") {
      converted = toUnit === "fahrenheit" ? value * 9/5 + 32 : value + 273.15;
    } else if (fromUnit === "fahrenheit") {
      converted = toUnit === "celsius" ? (value - 32) * 5/9 : (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin") {
      converted = toUnit === "celsius" ? value - 273.15 : (value - 273.15) * 9/5 + 32;
    }

    setResult(`${converted.toFixed(2)} ${toUnit}`);
  };

  const renderUnitOptions = () => {
    if (category === "temperature") {
      return ["celsius", "fahrenheit", "kelvin"];
    } else {
      return Object.keys(units[category]);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center text-[#3190ce] mb-4">Unit Converter</h1>

      <div className="grid gap-4">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            const options = e.target.value === "temperature"
              ? ["celsius", "fahrenheit", "kelvin"]
              : Object.keys(units[e.target.value]);
            setFromUnit(options[0]);
            setToUnit(options[1] || options[0]);
          }}
          className="border p-2 rounded"
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
        </select>

        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="border p-2 rounded"
        />

        <div className="flex gap-2">
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="flex-1 border p-2 rounded"
          >
            {renderUnitOptions().map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>

          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="flex-1 border p-2 rounded"
          >
            {renderUnitOptions().map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>

        <button
          onClick={convert}
          className="bg-[#3190ce] hover:bg-[#287cb5] text-white px-4 py-2 rounded"
        >
          Convert
        </button>

        {result && (
          <div className="text-center text-lg text-green-700 font-semibold">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};
