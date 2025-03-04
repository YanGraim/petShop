export function Cart() {
    return (
        <main className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="text-center font-bold text-3xl italic text-purple-700 my-4">
                Meu Carrinho
            </h1>

            <section className="flex items-center justify-between border-b-2 border-purple-300">
                <img className="w-28 m-2 rounded-lg" src="https://images.unsplash.com/photo-1626204451832-91eb35617cc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0c2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                <strong>Preço: R$ 60,00</strong>

                <div className="flex items-center justify-center gap-2">
                    <button className="bg-purple-500 px-2 text-white font-medium flex items-center justify-center rounded-full">
                        -
                    </button>
                    2
                    <button className="bg-purple-500 px-2 text-white font-medium flex items-center justify-center rounded-full">
                        +
                    </button>
                </div>

                <strong className="float-right">SubTotal: R$ 60,00</strong>
            </section>
            <p className="font-bold mt-4">Total: R$ 60,00</p>
        </main>

    )
}