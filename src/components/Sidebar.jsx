import React from "react";
import { Link } from "react-router-dom";
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa'
import {BiDrink} from 'react-icons/bi'
import "../style/Sidebar.css"

export default function Sidebar() {
    // const iconSize = 40

    
    return (
        <nav id="sidebar">
            <ul>
                <li><Link to={'/'}><FaHamburger/></Link></li>
                <li><Link to={'pizzas'}><FaPizzaSlice/></Link></li>
                <li><Link to={'drinks'}><BiDrink/></Link></li>
                {/* <li><Link to={'cart'}><BiCart/></Link></li> */}
            </ul>

        </nav>
    )
}