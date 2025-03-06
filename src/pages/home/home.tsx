import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { BsCartPlus } from "react-icons/bs";


interface ProdutosProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() {
    const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

    useEffect(() => {
        async function getProdutos() {
            const response = await api.get("/products")
            setProdutos(response.data);
        }
        getProdutos();
    }, [])
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-3xl mb-4 mt-10 text-center italic text-purple-700 select-none">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {produtos.map((produto) => (
                        <section className="w-full flex flex-col h-full p-4" key={produto.id}>
                        <img className="w-full rounded-lg max-h-70 mb-2" src={produto.cover} alt={produto.title} />
                        <p className="font-medium mt-1 mb-2">{produto.title}</p>
                        <div className="mt-auto flex items-center gap-3">
                          <div className="w-24 float-right">
                            <strong className="text-purple-700/80 select-none">
                              {produto.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                              })}
                            </strong>
                          </div>
                          <button className="bg-purple-900 p-1 rounded cursor-pointer">
                            <BsCartPlus size={20} color="#fff"/>
                          </button>
                        </div>
                      </section>
                      
                    ))}
                </div>
            </main>
        </div>
    )
}