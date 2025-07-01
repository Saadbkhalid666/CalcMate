import { Children } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/Navbar";

export const router  =  createBrowserRouter([
    {path:"/",element:<Layout   />, children:[

    ]}
])

function Layout (){

    return <>
    <Nav   />
    <Outlet  />
    </>
}