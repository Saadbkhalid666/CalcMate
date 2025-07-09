import { Children } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/Navbar";
import App from "../App";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router  =  createBrowserRouter([
    {path:"/",element:<Layout   />, children:[
        {index:true,element:<App   />},
        {path:'privacy-policy',element:<PrivacyPolicy    />}

    ]}
])

function Layout (){

    return <>
    <Nav   />
    <Outlet  />
    </>
}