import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
    return (
        <header className="w-full bg-green-700 px-2">
            <nav className="w-full max-w-7xl  h-16 flex items-center justify-between mx-auto px-5">
                <Link className="text-3xl text-white font-bold italic" to={"/"}>
                  PetShop
                </Link>

                <Link className="relative" to={"/cart"}>
                  <FiShoppingCart size={26} color="#fff"/>
                  <span className="absolute -right-3 -top-3 px-2.5 bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">2</span>
                </Link>
            </nav>
        </header>
    )
}