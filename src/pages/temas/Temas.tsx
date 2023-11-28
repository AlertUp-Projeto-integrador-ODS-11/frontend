import ListaTemas from "../../components/temas/listaTema/ListaTema"
import { Link } from "react-router-dom";

function Temas() {

    return (
        <>
        <div className="px-10">    
            <div className="flex justify-center">
                <div className='container'>
                    <div className="flex flex-col gap-4 items-start justify-center py-20  ">
                        <p className='text-xl text-[#585659]'>
                        Escreva aqui um tema para as postagens!
                        </p>

                        <div className="flex justify-around gap-4">
                            <Link to={`/cadastroTema`} className=' text-white font-bold w-full bg-secondary hover:bg-[#8b2681]
                            flex items-start justify-center p-3 px-6 rounded-md '>
                            <button>Cadastrar Tema</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            </div>
                <ListaTemas />
        </>
    )
}

export default Temas
