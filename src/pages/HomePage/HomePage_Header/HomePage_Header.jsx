import { Link } from "react-router-dom";
import { Button } from "../../../components";
import { useUser } from "../../../context";

export default function HomePage_Header() {
    const { authenticated, setAuthenticated } = useUser();

    const logout = () => {
        localStorage.clear();
        setAuthenticated(false);
    };

    return (
        <header
            className={`p-8 flex gap-8 justify-center ${
                authenticated || "fixed w-full bg-secondary_4"
            }`}
        >
            {authenticated ? (
                <Button onClick={logout}>Logout</Button>
            ) : (
                <>
                    <Link to="/login/reg">
                        <Button>Register</Button>
                    </Link>
                    <Link to="/login/log">
                        <Button>Login</Button>
                    </Link>
                </>
            )}
        </header>
    );
}
