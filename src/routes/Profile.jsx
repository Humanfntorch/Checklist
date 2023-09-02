import { useAuthContext } from "context/AuthContext";
import Header from "components/Header";
import { useNavigate} from "react-router-dom";

const Profile = () =>
{
    const { user } = useAuthContext();
    // Instantiate navigate to proceed user to home page through functional call
    const navigate = useNavigate();
    // Navigate user to home page!
    const buttonRedirect = () =>
    {
        navigate("/");
    };

    return (
        <div>
            <Header>
                <h1>Profile</h1>
                <h2> Welcome back, {user}! </h2>
            </Header>
            <button className="profileButton" onClick={buttonRedirect}>Manage your checklist</button>
        </div>
        
        
    );
}
export default Profile;
