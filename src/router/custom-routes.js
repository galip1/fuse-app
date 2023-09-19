import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/sign-up-page";
import SignInPage from "../pages/sign-in-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
