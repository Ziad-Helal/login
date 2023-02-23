import { createContext, useContext, useState } from "react";

const UserContext = createContext({
    authenticated: false,
    setAuthenticated: (boolean) => {},
});

export const UserProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const context = {
        authenticated,
        setAuthenticated,
    };

    return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
