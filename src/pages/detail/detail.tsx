import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProdutosProps } from "../home/home";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export function Details() {
  const { id } = useParams();
  const [produto, setProduto] = useState<ProdutosProps>();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProdutos() {
      const response = await api.get(`/products/${id}`);
      setProduto(response.data);
    }

    getProdutos();
  }, [id]);

  function handleAddItem(produto: ProdutosProps) {
    toast.success("Produto adicionado no carrinho.", {
      style: {
        color: "purple",
      },
    });
    addItemCart(produto);
    navigate("/cart");
  }

  return (
    <div className="mt-25">
      <main className="w-full max-w-7xl mx-auto px-4">
        {produto && (
          <section className="w-full">
            <div className="flex flex-col lg/:flex-row">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={produto?.cover}
                alt={produto?.title}
              />
              <div className="flex-1">
                <p className="font-bold text-2xl mt-4 mb-2">{produto?.title}</p>
                <p className="my-4">{produto?.description}</p>
                <strong className="text-purple-800/90">
                  {produto?.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="bg-purple-900 p-1 rounded cursor-pointer ml-3"
                  onClick={() => handleAddItem(produto)}
                >
                  <BsCartPlus size={20} color="#fff" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}