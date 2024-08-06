import { Navigate, Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {

  return (
    <UserProvider>
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } />
          {/* Para el 404 */}
          <Route path="/*" element={ <Navigate to="/about" />} />
        </Routes>
    </UserProvider>
  )
}
