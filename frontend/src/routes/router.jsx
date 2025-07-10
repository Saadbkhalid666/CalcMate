import { Children } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/Navbar";
import App from "../App";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/Terms&Conditions/Terms&Conditions";
import { Footer } from "../sections/footer/footer";
import { GSTCalculator } from "../pages/CalculatorPages/GSTCalculator";
import { PercentageCalculator } from "../pages/CalculatorPages/PercentageCalculator";
import { LoanEMICalculator } from "../pages/CalculatorPages/LoanEmiCalculator";
import { BMICalculator } from "../pages/CalculatorPages/BmiCalculator";
import { AgeCalculator } from "../pages/CalculatorPages/AgeCalculator";
import { ScientificCalculator } from "../pages/CalculatorPages/ScientificCalculator";
import { CurrencyConverter } from "../pages/CalculatorPages/CurrencyConverter";
import { TimeDurationCalculator } from "../pages/CalculatorPages/TimeDurationCalculator";
import { TaxCalculator } from "../pages/CalculatorPages/TaxCalculator";
import { UnitConverter } from "../pages/CalculatorPages/UnitConverter";

export const router  =  createBrowserRouter([
    {path:"/",element:<Layout   />, children:[
        {index:true,element:<App   />},
        {path:'privacy-policy',element:<PrivacyPolicy    />},
        {path:'terms',element:<TermsAndConditions    />},
        {path:'/gst-calculator',element:<GSTCalculator   />},
        {path:'/percentage-calculator',element:<PercentageCalculator  />},
        {path:'/loan-emi-calculator',element:<LoanEMICalculator  />},
        {path:'/bmi-calculator',element:<BMICalculator  />},
        {path:'/age-calculator',element:<AgeCalculator  />},
        {path:'/scientific-calculator',element:<ScientificCalculator  />},
        {path:'/currency-converter',element:<CurrencyConverter  />},
        {path:'/time-duration-calculator',element:<TimeDurationCalculator  />},
        {path:'/unit-converter',element:<UnitConverter  />},
        {path:'/tax-calculator',element:<TaxCalculator  />},

    ]}
])

function Layout (){

    return <>
    <div className="min-h-screen flex flex-col">
      <Nav /> {/* optional */}
      
      <main className="flex-grow">
        <Outlet /> {/* this is where routed content goes */}
      </main>

      <Footer />
    </div>
    </>
}