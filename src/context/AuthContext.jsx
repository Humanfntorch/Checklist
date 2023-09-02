import { useEffect, useState, useContext, createContext } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) =>
{   
    // Pulls username from local storage if available, otherwise sets to null
    const [user, setUser] = useState(getUserName());
    function getUserName()
    {
        const temp = localStorage.getItem("username");
        const savedUserName = JSON.parse(temp);
        return savedUserName || "";
    }

    // Persist user's data to local storage
    useEffect(() =>
    {
        const temp = JSON.stringify(user);
        localStorage.setItem("username", temp);
    }, [user]);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuthContext = () => useContext(AuthContext);