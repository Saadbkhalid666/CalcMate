import { Children } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/Navbar";
import App from "../App";

export const router  =  createBrowserRouter([
    {path:"/",element:<Layout   />, children:[
        {index:true,element:<App   />}

    ]}
])

function Layout (){

    return <>
    <Nav   />
    <Outlet  />
    </>
}