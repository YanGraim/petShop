/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react";
import { ProdutosProps } from "../pages/home/home";


interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProdutosProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string;
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
    const [total, setTotal] = useState("");

    function addItemCart(newItem: ProdutosProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if (indexItem !== -1) {
            const cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList)
            return;
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(produtos => [...produtos, data]);
        totalResultCart([...cart, data]);
    }

    function removeItemCart(product: CartProps) {
        const indexItem = cart.findIndex(item => item.id === product.id);

        if(cart[indexItem]?.amount > 1) {
            // Diminuir apenas 1
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items: CartProps[]) {
        const myCart = items;
        const result = myCart.reduce((acc, obj) => {
            return acc + obj.total
        }, 0);
        const resultFormated = result.toLocaleString("pt-BRL", {
            style: "currency",
            currency: "BRL"
        })
        setTotal(resultFormated);
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            cartAmount: cart.length,
            addItemCart,
            removeItemCart,
            total
         }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;