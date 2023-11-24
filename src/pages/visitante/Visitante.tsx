import { Link } from "react-router-dom";
import { ReactNode } from 'react';
import { User, GitHub } from 'react-feather';
import './Visitante.css'
import CardVisitante from "./cardVisitante/CardVisitante";
import CardPrefeitura from "./cardPrefeitura/CardPrefeitura";
import { Parallax } from 'react-parallax';


function Visitante() {
    let component: ReactNode
    let footer: ReactNode
    let conteudo: ReactNode

        component = (
            <div className='w-full bg-primary text-white
                flex justify-center py-5 px-10'>

                <div className="container justify-between flex items-center ... text-lg ">
                    <Link to='/home' title="Home" className='hover:opacity-80'>
                        <img src="/images/Alertup-icone-roxo.png" alt="AlertUp Logo" className="h-12 mr-4" /> </Link>

                    <div className="flex gap-6 ">
                        <Link to='/Login' className='hover:underline'>Login</Link>
                        <Link to='/cadastro' className='hover:underline'>Criar Conta</Link>
                        <Link to='/Login' title="Perfil" className='hover:opacity-70'><User className="text-white h-8 w-8" /></Link>
                    </div>
                </div>
            </div>
        )

        conteudo = (
            <>
            <div className="bg-gradient-to-b from-[#F95D0C] to-[#FBB731]">    
            <div className="flex justify-center w-100">
                <div className='container'>
                    <div className="flex flex-col gap-4 items-start justify-center py-10">
                        <div className="flex justify-center ">
                        <h1 className='text-5xl font-bold text-white self-center'>Conheça o  </h1>
                        <img src="https://i.imgur.com/7KjqdVu.png" className="max-w-xs ml-3" alt="logo Alertup" />
                        </div>

                        <p className='text-xl text-white mt-0'>
                        Conectando cidadãos, transformando cidades.
                        </p>

                        <div className="flex">
                        <p className='text-2xl text-white'>Promovemos a conexão entre o protagonismo <p> dos moradores das cidades 
                           com os responsáveis pela <p> segurança, qualidade, acessibilidade e infraestrutura.</p> </p></p>
                        </div>

                        <div className="flex justify-around gap-4 mt-20">
                            <Link to={`/cadastro`} className=' text-white text-2xl w-full bg-secondary hover:bg-[#8b2681]
                            flex items-start justify-center p-3 px-6 rounded-md '>
                            <button>Crie sua Conta</button>
                            </Link>

                            
                        </div>     
                        <div className=''>


            <div className="mt-20">
                <img src="https://i.imgur.com/SMLmkuu.png" className="" alt="onibusLotadoP&B" />

            <CardVisitante/>
            </div>
            <div className="mt-40">
            <CardPrefeitura />
            </div>
            </div>               
                    </div>
                </div>
            </div>
            </div>

            
            </>
        )

            

        footer = (

            <div className='w-full bg-secondary text-white flex justify-center py-5 px-10'>

                <div className="container justify-between flex items-center ... text-lg ">
                    <Link to='/home' title="Home" className='hover:opacity-70'>
                        <img
                            src="/images/Alertup-laranja-v2.png"
                            alt="AlertUp Logo"
                            className="h-12 mr-4"
                        /> </Link>


                    <div className="flex gap-6 ">
                        <Link to='/contato' className='hover:underline'>Contato</Link>
                        <Link to='/sobrenos' className='hover:underline'>Equipe</Link>
                        <Link to='https://github.com/AlertUp-Projeto-integrador-ODS-11' target="_blank" className='hover:opacity-70'><GitHub size={32} /></Link>
                    </div>
                </div>
            </div>
        )

    return (
        <>
            {component}
            {conteudo}
            {footer}
        </>
    )
    
}


export default Visitante