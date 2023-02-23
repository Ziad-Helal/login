import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { UserAPIProvider, UserProvider, UsersListProvider } from "./context";

export default function App() {
    return (
        <Router>
            <UsersListProvider>
                <UserAPIProvider>
                    <UserProvider>
                        <Routes>
                            <Route path="/login" element={<HomePage />} />
                            <Route path="/login/log" element={<LoginPage />} />
                            <Route path="/login/reg" element={<RegisterPage />} />
                        </Routes>
                    </UserProvider>
                </UserAPIProvider>
            </UsersListProvider>
        </Router>
    );
}
