import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import all pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";

function App() {
  return (
    <div className="App font-display">
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Legal & Support Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
                  404 - Page Not Found
                </h1>
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-6">
                  The page you're looking for doesn't exist.
                </p>
                <a 
                  href="/" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;