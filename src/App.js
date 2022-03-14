import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Signup from "./components/Singnup";
import Login from "./components/Login";
import { About } from "./components/About";
// import PrivateRoute from "./components/PrivateRoute";
import { Dashboard } from "./components/Dashboard";

// styles
import "./styles/templatemo-training-studio.css";
import "./styles/font-awesome.css"
import "./styles/bootstrap.min.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
