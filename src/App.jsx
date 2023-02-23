import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { UserAPIProvider, UsersListProvider } from "./context";

export default function App() {
    return (
        <Router>
            <UsersListProvider>
                <UserAPIProvider>
                    <Routes>
                        <Route path="/login" element={<HomePage />} />
                        <Route path="/login/log" element={<LoginPage />} />
                        <Route path="/login/reg" element={<RegisterPage />} />
                    </Routes>
                </UserAPIProvider>
            </UsersListProvider>
        </Router>
    );
}
