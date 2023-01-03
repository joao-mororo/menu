import React, { useContext } from "react";
import Header from "../components/Header";
import { BsTrashFill } from 'react-icons/bs'
import { BiPlus, BiMinus } from 'react-icons/bi'
import "../style/Cart.css"
import "../index.css"

import { CartContext } from "../contexts/cart";

export default function Cart() {
    const {
        productsCart,
        addProductToCart,
        removeProductFromCart,
        clearProductsFromCart
    } = useContext(CartContext)

    return (
        <div className="cart-page">
            <Header title="Carrinho" />

            {productsCart.map((item) => {
                return (
                    <div className="cart-item" key={item.id}>
                        <img className="cart-item-img" src={item.image} alt="" />
                        <section className="name-price-container">
                            <h2>{item.name}</h2>
                            <h3>R$ {item.price * item.qtd}</h3>
                        </section>
                        <section className="qtd-control-container" style={{ display: 'flex' }}>
                            <button className="cart-remove-button" onClick={() => removeProductFromCart(item.id)}><BiMinus /></button>
                            <p className="cart-qtd">{item.qtd}</p>
                            <button className="cart-add-button" onClick={() => addProductToCart(item.id)}><BiPlus /></button>
                        </section>
                        <button className="cart-clear-button" onClick={() => clearProductsFromCart(item.id)}><BsTrashFill /></button>
                    </div>
                )
            })}
        </div>
    )
}