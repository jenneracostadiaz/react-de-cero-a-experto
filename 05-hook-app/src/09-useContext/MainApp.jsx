import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } />
          {/* Para el 404 */}
          <Route path="/*" element={ <Navigate to="/about" />} />
        </Routes>
    </>
  )
}
