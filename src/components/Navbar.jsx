// import { useState, useRef } from "react";
// import { useOnClickOutside } from "useOnClickOutside";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";

// Routes to other pages, home being base index.
const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "login", text: "Login" },
    { path: "profile", text: "Profile" },
];

const Navbar = () =>
{   
    // Import user data + logout functionality
    const { user, logout } = useAuthContext();
    // State to handle navbar
    const [navbarOpen, setNavbarOpen] = useState(false);


    // Instantiate ref to detect outside clicks
    const ref = useRef();
    // Detects outside clicks to close navbar
    useEffect(() =>
    {
        const handler = (e) =>
        {
            if (navbarOpen && ref.current && !ref.current.contains(e.target))
            {
                setNavbarOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () =>
        {
            document.removeEventListener("mousedown", handler);
        }
    }, [navbarOpen])

    // Instantiate useNavigate to redirect on logout
    const navigate = useNavigate();

    // Callback for allowing user to logout
    const handleLogout = () =>
    {
        logout();
        // Redirect user to login page when logged out.
        navigate("/login");
    };

    return (
        <>
            <nav ref={ref} className="navbar">
                <button className="toggle"
                    onClick={() => setNavbarOpen((prev) => !prev)}>
                    {navbarOpen ? (<GrFormClose style={{ width: "32px", height: "32px" }} />) : (<FcMenu style={{width: "32px", height:"32px"}} />)}
                 </button>
                <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                    {links.map((link) => {
                        return (
                            <React.Fragment key={link.text}>
                            {/* Hide login menu when user is logged in */}
                                {(link.path === "login" && user) ? (null)
                                    : (
                                    /* If user is not logged in, hide profile page.
                                        A protected route wrapper wraps profile to redirect to login page
                                        in a subsequent logout case where profile still appears in navbar.
                                    */ 
                                        (link.path === "profile" && !user) ?
                                            (
                                                null
                                            )
                                    : (
                                        <li>
                                            <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text} </NavLink>
                                        </li>
                                    )
                                )}
                            </React.Fragment>
                        );
                    })}
                    {!user && (
                        <li className="log-in">
                            <span> Log in to edit check-list!</span>
                        </li>
                    )}
                </ul>
            </nav>
            {/* Allow user to logout if user is logged in. Only showcasing profile/logout info if logged in */}
            {user && (
                <div className="logout">
                    <p>{user}</p>
                    {<button onClick={handleLogout}> Logout </button>}
                </div>
            )}
        </>
    );
}

export default Navbar;