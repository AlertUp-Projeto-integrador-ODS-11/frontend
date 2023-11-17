function Home() {

    return (
        <>
            <div className="bg-[#fcfaf5e1] flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>
                            Realize aqui suas denúncias:
                        </p>

                        <div className="flex justify-around gap-4">
                        <button className='rounded bg-primary text-white py-2 px-4'>
                                Nova Denúncia
                        </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="/images/home-image.svg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home