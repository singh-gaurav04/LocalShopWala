import React from "react";
import Navbar from "./components/Navbar";
import SignupPage from "./components/signup page/SignupPage";
import Home from "./components/Home";
import Login_page from "./components/signup page/login";
import "/src/App.css";
import { Routes, Router, Route } from "react-router-dom";

const App = () => {
  return (
    // <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login_page />} />
        <Route path='/Signup' element={<SignupPage />} />

        {/* Other routes */}
      </Routes>
    </div>

    // </Router>
  );
};

export default App;
