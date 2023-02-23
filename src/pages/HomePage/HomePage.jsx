import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomePage_Header } from "../../pages";
import { UsersList } from "../../layouts";
import { useUsersList, useUserAPI } from "../../context";

export default function HomePage() {
    const { usersList } = useUsersList();
    const { getUsersList } = useUserAPI();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.length > 0) {
            getUsersList();
        } else navigate("/login/log");
    }, []);

    return (
        <>
            <HomePage_Header />
            <main className="min-h-screen flex justify-center items-center">
                {usersList.length > 0 ? (
                    <UsersList list={usersList} />
                ) : (
                    <p className="text-5xl">Loading</p>
                )}
            </main>
        </>
    );
}
