import { createContext, useContext, useState } from "react";

const UsersListContext = createContext({
    usersList: [],
    setUsersList: (array) => {},
});

export const UsersListProvider = ({ children }) => {
    const [usersList, setUsersList] = useState([]);

    const context = {
        usersList,
        setUsersList,
    };

    return <UsersListContext.Provider value={context}>{children}</UsersListContext.Provider>;
};

export const useUsersList = () => useContext(UsersListContext);
