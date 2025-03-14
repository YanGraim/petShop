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
            <main className="w-full max-w-7xl mx-auto px-4"></main>
        </div>
    )
}