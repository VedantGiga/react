import React from "react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout