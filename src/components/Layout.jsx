import Navbar from "components/Navbar";
// Outlet renders child route's elements in the parent route (this one)
import { Outlet } from "react-router-dom";
// AuthProvider allows login/logout
import { AuthProvider } from "context/AuthContext";


const Layout = () =>
{
    return (
        <div className="wrapper">
            <AuthProvider>
                <Navbar />
                <Outlet />
            </AuthProvider> 
        </div>
    );
}

export default Layout;