import { useState } from "react";
import styles from "styles/Login.module.css";
import { useAuthContext } from "context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () =>
{
    /*
        States to handle username input and submission of username.
        A context provider is used to update global state username
        for current user.
    */
    const [username, setUsername] = useState("");
    const { login } = useAuthContext();
    // Navigates away from login when a user logs in
    const navigate = useNavigate();
    // Redirect user to intended path url after loggin in
    const location = useLocation();
    const from = location.state?.pathname || "/profile";


    // Handles the login button action
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (!username)
        {
            return;
        }
        login(username);
        setUsername("");
        // Transition from log-in page to intended route (or profile if not found).
        // Replace: true ensures that the login screen is replaced in browser history with action before login.
        navigate(from, {replace: true});
    };

    




    return (
        <div>
            <div className={styles.formWrapper}>
            <h1 className={styles.header}>Sign In</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} />
                    <button className={styles.submit}> Login</button>
                </form>
                </div>
        </div>
    )
}
export default Login;
