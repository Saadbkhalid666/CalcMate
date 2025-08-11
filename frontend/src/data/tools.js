import { 
  FaCalculator, 
  FaPercent, 
  FaMoneyBillWave, 
  FaHeartbeat, 
  FaBirthdayCake, 
  FaFlask, 
  FaExchangeAlt, 
  FaClock, 
  FaFileInvoiceDollar, 
  FaLayerGroup 
} from "react-icons/fa";

export const ToolsList = [
  {
    id: "gst-calculator",
    name: "GST Calculator",
    description:
      "Quickly calculate Goods and Services Tax (GST) for accurate invoices and easy tax breakdowns in seconds.",
    url: "/gst-calculator",
    icon: FaCalculator,
    clr: "bg-yellow-400",
    category: "Finance",
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description:
      "Easily find percentages, increases, decreases, or ratios with our fast, accurate Percentage Calculator tool.",
    url: "/percentage-calculator",
    icon: FaPercent,
    clr: "bg-pink-400",
    category: "Math",
  },
  {
    id: "loan-emi-calculator",
    name: "Loan & EMI Calculator",
    description:
      "Estimate your monthly loan repayments and total interest with our easy-to-use EMI Calculator for all loans.",
    url: "/loan-emi-calculator",
    icon: FaMoneyBillWave,
    clr: "bg-purple-500",
    category: "Finance",
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description:
      "Check your Body Mass Index (BMI) instantly and track your ideal weight range for better health monitoring.",
    url: "/bmi-calculator",
    icon: FaHeartbeat,
    clr: "bg-orange-500",
    category: "Health",
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    description:
      "Find your exact age in years, months, and days with our accurate, easy-to-use online Age Calculator tool.",
    url: "/age-calculator",
    icon: FaBirthdayCake,
    clr: "bg-blue-400",
    category: "Date & Time",
  },
  {
    id: "scientific-calculator",
    name: "Scientific Calculator",
    description:
      "Perform advanced math, scientific, and engineering calculations with our powerful online Scientific Calculator.",
    url: "/scientific-calculator",
    icon: FaFlask,
    clr: "bg-green-500",
    category: "Math",
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description:
      "Convert currencies worldwide with real-time exchange rates. Accurate and fast Currency Converter for travelers.",
    url: "/currency-converter",
    icon: FaExchangeAlt,
    clr: "bg-red-500",
    category: "Finance",
  },
  {
    id: "time-duration-calculator",
    name: "Time Duration Calculator",
    description:
      "Calculate time differences precisely between dates and times with our simple, accurate Time Duration Calculator.",
    url: "/time-duration-calculator",
    icon: FaClock,
    clr: "bg-indigo-500",
    category: "Date & Time",
  },
  {
    id: "tax-calculator",
    name: "Tax Calculator",
    description:
      "Estimate taxes easily with our accurate Tax Calculator for income tax, sales tax, or other tax calculations.",
    url: "/tax-calculator",
    icon: FaFileInvoiceDollar,
    clr: "bg-teal-500",
    category: "Finance",
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    description:
      "Convert units of measurement quickly with our all-in-one Unit Converter for length, weight, volume, and more.",
    url: "/unit-converter",
    icon: FaLayerGroup,
    clr: "bg-cyan-500",
    category: "Measurement",
  },
];
