import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='px-8 py-6 flex justify-center lg:w-2/4 sm:w-full'>
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md  bg-white'>
            <div>
                <div className="flex w-full py-2 px-4 items-center gap-4">
                    <img src={post.user?.foto} className='h-12 rounded-full'
                         alt="Imagem do Usuário" />
                    <div className="justify-start">
                        <h3 className='text-lg font-bold uppercase'>{post.user?.nome}</h3>
                        <p>Município: {post.municipio}</p>
                        <p className="text-sm">{new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                        }).format(new Date(post.data))}</p>
                    </div>
                </div>
                
                <div className='p-4'>
                    <h4 className='capitalize text-lg font-semibold'>{post.titulo}</h4>
                    <p>Tema: {post.tema?.titulo}</p>
                    <p className='py-2 pb-6'>{post.descricao}</p>
                    <img src={post.foto} alt="foto da postagem" className='object-fill h-full flex justify-center max-w-full '/>
                </div>

            </div>

            <div className="flex">
                <Link to={`/editarPostagem/${post.id}`} className='font-bold w-full bg-white hover:bg-[#E4E4E4]
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className='font-bold text-white bg-primary hover:bg-[#FEA235] w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
                            </div>
    )
}

export default CardPostagens