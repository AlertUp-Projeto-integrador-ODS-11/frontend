import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='px-8 py-4'>
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md'>
            <header className='pt-6 pb-3 px-10 bg-white font-bold text-lg'>
                {tema.titulo}
            </header>

            <p className='flex pb-10 text-1xl bg-white h-full px-10 text-[#6F6F6F]'>
                {tema.descricao}
            </p>

            <div className="flex">
                <Link to={`/editarTema/${tema.id}`}
                    className='font-bold w-full bg-white hover:bg-[#E4E4E4]
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarTema/${tema.id}`}
                    className='bg-primary hover:bg-[#FEA235] font-bold w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
         </div>
    )
}

export default CardTemas