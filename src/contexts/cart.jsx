import { createContext, useEffect, useState } from "react";
import * as Menu from '../data/menu'

export const CartContext = createContext()

export default function CartProvider({children}) {
    const [productsCart, setProductsCart] = useState([])

    useEffect(() => {
        console.log(productsCart);
    }, [productsCart])

    function findProduct(id, qtd) {
        const array = [...Menu.hamburguers, ...Menu.pizzas, ...Menu.drinks]
        const product = array.find((product) => product.id === id)
        product.qtd = qtd
        return product
    }

    // {id: 1, qtd: 1}

    function addProductToCart(id) {
        const copyProductsCart = [...productsCart]

        const item = copyProductsCart.find((product) => product.id === id)

        if (!item) {
            copyProductsCart.push(findProduct(id, 1))
        } else {
            item.qtd = item.qtd + 1
        }

        setProductsCart(copyProductsCart)
    }

    function removeProductFromCart(id) {
        const copyProductsCart = [...productsCart]

        const item = copyProductsCart.find((product) => product.id === id)

        if (item && item.qtd > 1) {
            item.qtd -= 1
            setProductsCart(copyProductsCart)
        } else {
            const arrayFiltered = copyProductsCart.filter((product) => product.id !== id)
            setProductsCart(arrayFiltered)
        }
    }

    function clearProductsFromCart(id) {
        const copyProductsCart = [...productsCart]
        const arrayFiltered = copyProductsCart.filter((product) => product.id !== id)
        setProductsCart(arrayFiltered)
    }

    return (
        <CartContext.Provider
            value={{productsCart, addProductToCart, removeProductFromCart, clearProductsFromCart}}
        >
            {children}
        </CartContext.Provider>
    )
}