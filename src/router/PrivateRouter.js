import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Reviews from "../components/Reviews";

export default function PrivateRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </BrowserRouter>
    )
}