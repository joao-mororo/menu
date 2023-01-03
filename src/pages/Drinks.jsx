import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { drinks } from "../data/menu";
import "../index.css"

export default function Drinks() {
    return (
        <div className="drinks-page">
            <Header title="Drinks" />
            <Card items={drinks} />
        </div>
    )
}