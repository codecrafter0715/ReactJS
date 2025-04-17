import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import data from "./data.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail.jsx";
import ThemeProvider from "./hooks/ThemeContext.jsx";
import AuthProvider from "./hooks/AuthContext.jsx";
import HeaderImage from "./assets/Background.jpg";

function App() {
const [isLoggin, setIsLogin] = useState(false)

  return (
    <>
      <Router>
<ThemeProvider>
  <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/home" element={<HomePage data={data} />}></Route>
          <Route path="/card-detail/:ID/*" element={<CardDetail />}></Route>
        </Routes>
  </AuthProvider>
</ThemeProvider>
      </Router>
    </>
  );
}

export default App;