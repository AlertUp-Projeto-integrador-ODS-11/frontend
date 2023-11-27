
import Visitante from '../../../models/Postagem'
import { Heart, Flag, ArrowCircleUp, PencilSimpleLine, Trash, ArrowBendDoubleUpLeft } from '@phosphor-icons/react'


function CardVisitante() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between lg:w-2/4 sm:w-full bg-white ml-80 mb-20 mt-20'>
            <div>
                <div className="flex w-full py-2 px-4 items-center gap-4">
                    <img src="https://i.imgur.com/vIVMVST.png" className='h-12 rounded-full'
                         alt="Imagem do Usuário" />
                    <div className="justify-start">
                        <h3 className='text-lg font-bold mt-3'>Fátima Aguiar</h3>
                        <p>Município: São Paulo</p>
                        <p className="text-sm">03/11/2023</p>
                    </div>
                    <div className='flex justify-normal ml-96'>
                        <PencilSimpleLine className='flex text-2xl' />
                        <Trash className='flex text-2xl ml-3' />
                        <ArrowBendDoubleUpLeft className='flex text-2xl ml-3'/>
                    </div>
                </div>
                
                <div className='p-4'>
                    <h4 className='text-lg font-semibold m-2'>Transporte Público</h4>
                    <p className='text-lg m-2'>Ônibus do centro cada vez mais lotados! Muitas vezes precisamos esperar por horas outro ônibus passar.</p>
                    {/* <img src="" alt="foto da Visitante" className='object-fill h-full flex justify-center max-w-full '/> */}
                </div>

            </div>

            <div className="flex ml-5 mb-3 p-2">
                    <button className='bg-primary p-2 rounded text-white hover:bg-slate-400'>Responder</button>
                    <Heart className="flex text-2xl self-center ml-4 text-red-400 " />
                    <Flag className="flex text-2xl self-center ml-2 text-yellow-400" />
                    <ArrowCircleUp className="flex text-2xl self-center ml-2 text-green-400" />

            </div>
        </div>
    )
}

export default CardVisitante