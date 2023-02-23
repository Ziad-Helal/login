import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";

export default function HomePage_Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login/log");
    };

    return (
        <header className={`p-8 flex gap-8 justify-center`}>
            <Button onClick={logout}>Logout</Button>
        </header>
    );
}
