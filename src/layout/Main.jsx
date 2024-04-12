import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;