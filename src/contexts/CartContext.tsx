import { createContext, ReactNode, useState } from "react";


interface CartContextData {
    cart: CartProps[];
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
    const [cart, setCart] = useState<CartProps[]>([])
    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;