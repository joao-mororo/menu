import React from "react";
import { Link } from "react-router-dom";
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa'
import {BiDrink} from 'react-icons/bi'
import "../style/Sidebar.css"

export default function Sidebar() {
    const iconSize = 30
    
    return (
        <nav id="sidebar">
            <ul>
                <li><Link to={'/'}><FaHamburger size={iconSize} /></Link></li>
                <li><Link to={'pizzas'}><FaPizzaSlice size={iconSize} /></Link></li>
                <li><Link to={'drinks'}><BiDrink size={iconSize} /></Link></li>
                {/* <li><Link to={'cart'}><BiCart size={iconSize} /></Link></li> */}
            </ul>

        </nav>
    )
}