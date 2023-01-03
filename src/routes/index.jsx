import React from "react";
import { Routes, Route } from 'react-router-dom'
import Hamburguers from "../pages/Hamburguers"
import Pizzas from "../pages/Pizzas"
import Drinks from "../pages/Drinks"
import Cart from "../pages/Cart";

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<Hamburguers />} />
            <Route path="/pizzas" element={<Pizzas />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
    )
}