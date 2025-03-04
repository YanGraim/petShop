import { BsCartPlus } from "react-icons/bs";

export function Home() {
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-3xl mb-4 mt-10 text-center italic text-purple-700 select-none">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <section className="w-full">
                        <img className="w-full rounded-lg max-h-70 mb-2" src="https://images.unsplash.com/photo-1626204451832-91eb35617cc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0c2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="petshop" />
                        <p className="font-medium mt-1 mb-2">Roupas</p>

                        <div className="flex items-center gap-3">
                            <strong className="text-purple-700/80 select-none">R$ 60,00</strong>
                            <button className="bg-purple-900 p-1 rounded cursor-pointer">
                                <BsCartPlus size={20} color="#fff"/>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}