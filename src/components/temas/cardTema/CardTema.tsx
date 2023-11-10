import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-secondary text-white font-bold text-2xl'>
                {tema.titulo}
            </header>

            <p className='flex p-5 text-1xl bg-white h-full'>
                {tema.descricao}
            </p>

            <div className="flex">
                <Link to={`/editarTema/${tema.id}`}
                    className='w-full text-slate-100 bg-secondary hover:bg-orange-600
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarTema/${tema.id}`}
                    className='text-slate-100 bg-red-600 hover:bg-red-800 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas