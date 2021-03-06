import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Signup from "./components/Singnup";
import Login from "./components/Login";
import { About } from "./components/About";
// import PrivateRoute from "./components/PrivateRoute";
import { Dashboard } from "./components/Dashboard";
import { RegisterForSport } from "./components/RegisterForSport";
import { RegisteredTeams } from "./components/RegisteredTeams";
import { Menu } from "./components/Menu";
import { ScoreCard } from "./components/ScoreCard";
import { ScoreSet } from "./components/ScoreSet";
import { CreateFixtures } from "./components/CreateFixtures";
import { ViewFixtures } from "./components/ViewFixtures";
import { OTP } from "./components/OTP";

// styles
import "./styles/templatemo-training-studio.css";
import "./styles/font-awesome.css";
import "./styles/bootstrap.min.css";

function App() {
  const [data, setData] = useState(null);
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup setdata={setData}/>} />
          <Route path="login" element={<Login />} />
          <Route path="register-for-sport" element={<RegisterForSport />} />
          <Route path="registered-teams" element={<RegisteredTeams />} />
          <Route path="sport-menu" element={<Menu />} />
          <Route path="score-card" element={<ScoreCard />} />
          <Route path="score-set" element={<ScoreSet />} />
          <Route path="create-fixtures" element={<CreateFixtures />} />
          <Route path="view-fixtures" element={<ViewFixtures/>} />
          <Route path="otp-check" element={<OTP data={data}/>} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </Router>
  );
}

export default App;
