import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Survey from "../pages/Survey/Survey";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/survey" element={<Survey />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
