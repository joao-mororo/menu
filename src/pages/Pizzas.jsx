import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { pizzas } from "../data/menu";
import "../index.css"

export default function Pizzas() {
    return (
        <div className="pizzas-page">
            <Header title="Pizzas" />
            <Card items={pizzas} />
        </div>
    )
}