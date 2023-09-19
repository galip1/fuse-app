import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/sign-up-page";
import AuthPage from "../pages/auth-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
