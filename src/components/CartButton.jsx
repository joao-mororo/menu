import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import { BiCart } from 'react-icons/bi'
import '../style/CartButton.css'

export default function CartButton() {
    const {
        productsCart,
    } = useContext(CartContext)

    return (
        <>
            {productsCart.length > 0 &&
                <Link className="cart-button" to={'cart'}><BiCart style={{marginRight: '5px'}} /> Carrinho</Link>
            }
        </>
    )
}