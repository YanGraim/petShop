/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react";
import { ProdutosProps } from "../pages/home/home";


interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProdutosProps) => void;
}


interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number; //Quantidade de produtos
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);

    function addItemCart(newItem: ProdutosProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if (indexItem !== -1) {
            const cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            return;
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(produtos => [...produtos, data])

    }
    return (
        <CartContext.Provider value={{ 
            cart,
            cartAmount: cart.length,
            addItemCart 
         }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;