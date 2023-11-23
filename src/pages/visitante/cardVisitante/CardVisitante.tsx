import { Link } from 'react-router-dom'
import Visitante from '../../../models/Postagem'

interface CardVisitanteProps {
    post: Visitante
}

function CardVisitante() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between lg:w-2/4 sm:w-full bg-white '>
            <div>
                <div className="flex w-full py-2 px-4 items-center gap-4">
                    <img src="https://i.imgur.com/vIVMVST.png" className='h-12 rounded-full'
                         alt="Imagem do Usuário" />
                    <div className="justify-start">
                        <h3 className='text-lg font-bold uppercase'>Fátima Aguiar</h3>
                        <p>Município: São Paulo</p>
                        <p className="text-sm">03/11/2023</p>
                    </div>
                </div>
                
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>Transporte Público</h4>
                    <p>Ônibus do centro cada vez mais lotados! Muitas vezes precisamos esperar por horas outro ônibus passar.</p>
                    <img src="" alt="foto da Visitante" className='object-fill h-full flex justify-center max-w-full '/>
                </div>

            </div>

            <div className="flex">
                    <button>Responder</button>
            </div>
        </div>
    )
}

export default CardVisitante