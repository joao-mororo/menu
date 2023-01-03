import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { hamburguers } from "../data/menu";
import "../index.css"



export default function Hamburguers() {
    return (
        <div className="hamburguers-page">
            <Header title="Hamburguers" />
            <Card items={hamburguers} />
        </div>
    )
}