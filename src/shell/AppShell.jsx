import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppShell = () => {

    return(
        <>
        <Navbar />
        AppShell
        <main>
        <Outlet />    
        </main>
        <Footer />
        </>
    )
}

export default AppShell;