import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUsersList } from "../../context";
import { registerFetch, loginFetch, getUsersListFetch } from "../../api/api";

const UserAPI = createContext({
    login: ({ email = "", password = "" }) => {},
    register: ({ first_name = "", last_name = "", email = "", password = "" }) => {},
    getUsersList: () => {},
});

export const UserAPIProvider = ({ children }) => {
    const navigate = useNavigate();
    const { setUsersList } = useUsersList();

    const login = async ({ email, password }) => {
        const json = await loginFetch({ email, password });
        if (json["token_type"] === "Bearer") {
            localStorage.setItem("auth", `Bearer ${json["access_token"]}`);
            navigate("/login/");
        } else console.log(json.message);
    };

    const register = async ({ first_name, last_name, email, password }) => {
        const json = await registerFetch({ first_name, last_name, email, password });
        if (json.status) {
            console.log("Signed up succesfully");
            navigate("/login/log");
        } else console.log(json.message);
    };

    const getUsersList = async () => {
        if (localStorage.length > 0) {
            const json = await getUsersListFetch();
            if (json.message) console.log(json.message);
            else {
                setUsersList([...json]);
            }
        }
    };

    const context = {
        login,
        register,
        getUsersList,
    };

    return <UserAPI.Provider value={context}>{children}</UserAPI.Provider>;
};

export const useUserAPI = () => useContext(UserAPI);
