import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LayoutPublic = () => {
    return (
        <div>
            <Navbar/>
            <main className="container">
                <Outlet />
            </main>
            <footer className="footer font-size-16 line-height-1.4">
                &copy; {new Date().getFullYear()} All rights reserved
            </footer>
        </div>
    );
};

export default LayoutPublic;
