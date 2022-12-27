import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export default function PublicRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}