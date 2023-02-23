import { useEffect } from "react";
import { HomePage_Header } from "../../pages";
import { UsersList } from "../../layouts";
import { useUser, useUsersList, useUserAPI } from "../../context";

export default function HomePage() {
    const { authenticated, setAuthenticated } = useUser();
    const { usersList } = useUsersList();
    const { getUsersList } = useUserAPI();

    useEffect(() => {
        if (localStorage.length > 0) {
            setAuthenticated(true);
            getUsersList();
        }
    }, []);

    return (
        <>
            <HomePage_Header />
            <main className="min-h-screen flex justify-center items-center">
                {authenticated ? (
                    usersList.length > 0 ? (
                        <UsersList list={usersList} />
                    ) : (
                        <p className="text-5xl">No Users</p>
                    )
                ) : (
                    <p className="text-5xl">Not Authenticated</p>
                )}
            </main>
        </>
    );
}
