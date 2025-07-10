import { FaCalculator, FaMoneyBillWave, FaHeartbeat, FaExchangeAlt } from "react-icons/fa";

export const FeaturedToolsList = [
  {
    id: "gst-calculator",
    name: "GST Calculator",
    description:
      "Easily calculate Goods and Services Tax (GST) on your invoices. Get instant tax-inclusive or tax-exclusive values for accurate billing.",
    clr: "bg-yellow-300",
    url: "/gst-calculator",
    icon: FaCalculator,
  },
  {
    id: "loan-emi-calculator",
    name: "Loan & EMI Calculator",
    description:
      "Quickly estimate your monthly loan payments with our EMI Calculator. Perfect for personal, home, car, or business loan planning.",
    clr: "bg-purple-500",
    url: "/loan-emi-calculator",
    icon: FaMoneyBillWave,
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description:
      "Calculate your Body Mass Index (BMI) and check your ideal weight range. Track your health status based on global standards.",
    clr: "bg-orange-500",
    url: "/bmi-calculator",
    icon: FaHeartbeat,
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description:
      "Convert currencies instantly with real-time exchange rates. Access over 150 global currencies, ideal for travel and business.",
    clr: "bg-red-500",
    url: "/currency-converter",
    icon: FaExchangeAlt,
  },
];
