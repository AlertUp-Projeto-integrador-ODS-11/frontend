import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Tema from "../../../models/Tema";
import {toastAlerta} from "../../../utils/toastAlerta.ts";
import { RotatingLines } from "react-loader-spinner";

function DeletarTema() {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [tema, setTema] = useState<Tema>({} as Tema)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('Token expirado. Por favor, faça login novamente!', "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado para utilizar essa funcionalidade.', "erro")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagada com sucesso!', "sucesso")

        } catch (error) {
            toastAlerta('Erro ao apagar tema. Tente novamente!', "erro")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?
        	</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-white font-bold text-2xl'>
                    {tema.titulo}
                </header>
                <p className='p-8 text-3xl bg-white h-full'>{tema.descricao}</p>

                <div className="flex">

                    <button
                        className='font-bold bg-white hover:bg-[#E4E4E4] w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>

                    <button
                        className='w-full font-bold bg-primary hover:bg-[#FEA235]
                            flex items-center justify-center'
                        onClick={deletarTema}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>

                </div>
            </div>
        </div>
    )
}

export default DeletarTema