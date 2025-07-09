import { Children } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/Navbar";
import App from "../App";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/Terms&Conditions/Terms&Conditions";
import { Footer } from "../sections/footer/footer";

export const router  =  createBrowserRouter([
    {path:"/",element:<Layout   />, children:[
        {index:true,element:<App   />},
        {path:'privacy-policy',element:<PrivacyPolicy    />},
        {path:'terms',element:<TermsAndConditions    />},

    ]}
])

function Layout (){

    return <>
    <Nav   />
    <Outlet  />
    <Footer  />
    </>
}