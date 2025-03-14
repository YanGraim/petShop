import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProdutosProps } from "../home/home";


export function Details() {
    const { id } = useParams();
    const [produto, setProduto] = useState<ProdutosProps>();


    useEffect(() => {
        async function getProdutos() {
            const response = await api.get(`/products/${id}`);
            setProduto(response.data)
        }

        getProdutos();
    }, [id])

    return (
        <div className="mt-25">
            <main className="w-full max-w-7xl mx-auto px-4">
                {produto && (
                    <section className="w-full">
                        <div className="flex">
                            <img className="flex-1 w-full max-h-72 object-contain" src={produto?.cover} alt={produto?.title} />
                            <div className="flex-1">
                                <p>{produto?.title}</p>
                                <p>{produto?.description}</p>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}