function sobreNos() {
    
    return (
        <>
            <div className="bg-[#fcfaf5e1] flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>Sobre Nós</h2>
                        <p className='text-xl text-justify p-2'>
                        Somos uma organização que tem foco na ODS 11 da ONU: Sua ênfase é sobre cidades e comunidades sustentáveis.
                        <br />
A Objetivo de Desenvolvimento Sustentável (ODS) 11 da ONU visa tornar as cidades e os assentamentos humanos mais inclusivos, seguros, resilientes e sustentáveis até 2030. Esta meta aborda questões urbanas fundamentais, buscando melhorar o planejamento urbano, a gestão de recursos, o acesso à habitação adequada e a mobilidade. Além disso, a ODS 11 promove a preservação do patrimônio cultural, o desenvolvimento econômico e a participação social, com o objetivo de criar cidades mais sustentáveis, habitáveis e equitativas para todos os seus habitantes. Ela também destaca a importância de tecnologias inovadoras e soluções inteligentes para enfrentar os desafios urbanos e melhorar a qualidade de vida nas cidades ao redor do mundo.
                        </p>

                        <div className="flex justify-around gap-4">
                        <button className='rounded bg-primary text-white py-2 px-4'>
                                Entre em contato!
                        </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="./src/assets/team-work-animate.svg"
                            alt="Imagem Página Sobre nós"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default sobreNos