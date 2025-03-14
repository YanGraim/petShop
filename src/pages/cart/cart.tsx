import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="text-center font-bold text-3xl italic text-purple-700 mt-20">
        Meu Carrinho
      </h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center my-12">
          <p className="text-2xl font-medium">Ops seu carrinho está vazio...</p>
          <Link
            to={"/"}
            className="font-light bg-green-600 px-3 p-1 my-8 rounded text-purple-700 hover:underline"
          >
            Acessar produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-purple-300"
        >
          <img
            className="w-28 rounded-lg my-2"
            src={item.cover}
            alt={item.title}
          />

          <strong>
            Preço:{" "}
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-purple-500 px-2 text-white font-medium flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => removeItemCart(item)}
            >
              -
            </button>
            {item.amount}
            <button
              className="bg-purple-500 px-2 text-white font-medium flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => addItemCart(item)}
            >
              +
            </button>
          </div>

          <strong className="float-right ml-3">
            SubTotal:{" "}
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </section>
      ))}
      {cart.length !== 0 && (
        <p className="font-bold text-zinc-900 my-6">Total: {total}</p>
      )}
    </main>
  );
}
