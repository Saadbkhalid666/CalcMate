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

export const router  =  createBrowserRouter([
    {path:"/",element:<Layout   />, children:[
        {index:true,element:<App   />},
        {path:'privacy-policy',element:<PrivacyPolicy    />},
        {path:'terms',element:<TermsAndConditions    />},
        {path:'/gst-calculator',element:<GSTCalculator   />},
        {path:'/percentage-calculator',element:<PercentageCalculator  />},
        {path:'/loan-emi-calculator',element:<LoanEMICalculator  />},
        {path:'/bmi-calculator',element:<BMICalculator  />},

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