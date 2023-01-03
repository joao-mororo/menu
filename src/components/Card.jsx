import React, { useContext } from "react";
import "../style/Card.css"
import { FaPlus } from "react-icons/fa";
import { CartContext } from "../contexts/cart";

export default function Card({ items }) {
    const {
        productsCart,
        addProductToCart
    } = useContext(CartContext)

    const displayCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    function findQtd(id) {
        const product = productsCart.find((product) => product.id === id)
        if (product) {
            return product.qtd
        }
    }

    return (
        <div className="card-area">
            {items.map((item) => {
                return (
                    <div className="card" key={item.id}>

                        {item.image && <img className="card-img" src={item.image} alt="" />}
                        <section style={displayCenter}>
                            <h2 className="card-name">{item.name}</h2>
                            {findQtd(item.id) && <p className="card-qtd">{findQtd(item.id)}</p>}
                        </section>
                        <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 className="card-price">R$ {item.price}</h2>
                            <button className="card-button" onClick={() => addProductToCart(item.id)}>Adicionar <FaPlus /></button>
                        </section>
                    </div>
                )
            })}
        </div>
    )
}