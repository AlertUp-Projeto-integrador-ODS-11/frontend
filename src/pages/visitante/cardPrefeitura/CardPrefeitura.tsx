
import Visitante from '../../../models/Postagem'
import { Heart, Flag, ArrowCircleUp, PencilSimpleLine, Trash, ArrowBendDoubleUpLeft } from '@phosphor-icons/react'


function CardVisitante() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between lg:w-2/4 sm:w-full bg-white ml-80 mb-20'>
            <div>
                <div className="flex w-full py-2 px-4 items-center gap-4">
                    <img src="https://i.imgur.com/SEgeKqX.png" className='h-12 rounded-full'
                         alt="Imagem do Usuário" />
                    <div className="justify-start">
                        <h3 className='text-lg font-bold mt-3'>Prefeitura de São Paulo</h3>
                        <p>Município: São Paulo</p>
                        <p className="text-sm">19/11/2023</p>
                    </div>
                    <div className='flex justify-normal ml-80'>
                        <PencilSimpleLine className='flex text-2xl' />
                        <Trash className='flex text-2xl ml-3' />
                        <ArrowBendDoubleUpLeft className='flex text-2xl ml-3'/>
                    </div>
                </div>
                
                <div className='p-4'>
                    <h4 className='text-lg font-semibold m-2'>Transporte Público</h4>
                    <p className='text-lg m-2'>Olá Fátima, agrademos sua colaboração. A Prefeitura de São Paulo junto com a Empresa Ônibus & Cia, lançou este mês mais 50 frotas de Ônibus na Região da Avenida Paulista, no centro de São Paulo. As operações começaram dia 07/10/2023 e atende 10 mil pessoas todos os dias. Até o fim do ano, pretendemos aumentar a frota para 200 unidades. Você pode conferir em: www.receitadogoverno.com.br.</p>
                    
                    {/* <img src="" alt="foto da Visitante" className='object-fill h-full flex justify-center max-w-full '/> */}
                </div>

            </div>

            <div className="flex ml-5 mb-3 p-2">
                    <button className='bg-primary p-2 rounded text-white hover:bg-slate-400'>Editar</button>
                    <Heart className="flex text-2xl self-center ml-4 text-red-400 " />
                    <Flag className="flex text-2xl self-center ml-2 text-yellow-400" />
                    <ArrowCircleUp className="flex text-2xl self-center ml-2 text-green-400" />

            </div>
        </div>
    )
}

export default CardVisitante