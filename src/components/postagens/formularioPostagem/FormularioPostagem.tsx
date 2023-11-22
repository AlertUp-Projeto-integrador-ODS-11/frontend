import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from '../../../contexts/AuthContext';

import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { toastAlerta } from "../../../utils/toastAlerta.ts";

function FormularioPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, titulo: '', descricao: '', })
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPostagemPorId(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemaPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemas() {
        await buscar('/temas', setTemas, {
            headers: {
                Authorization: token,
            },
        })
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado para utilizar essa funcionalidade.', "erro");
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            user: usuario,
        });
    }

    function atualizarEstadoArea(e: ChangeEvent<HTMLTextAreaElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            user: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlerta('Postagem atualizada com sucesso!', "sucesso")

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('Token expirado. Por favor, faça login novamente!', "info")
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar a postagem. Tente novamente!', "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                toastAlerta('Postagem cadastrada com sucesso!', "sucesso");

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('Token expirado. Por favor, faça login novamente!', "info")
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a postagem. Tente novamente!', "erro");
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';

    console.log(tema)

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar postagem' : 'Cadastrar postagem'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da postagem</label>
                    <input
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o título"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Texto da postagem</label>
                    <textarea
                        value={postagem.descricao}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoArea(e)}
                        placeholder="Adicione aqui o texto da postagem"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Mídia da postagem</label>
                    <input
                        value={postagem.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="url"
                        placeholder="Adicione aqui a url da imagem"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="municipio">Município da Postagem</label>
                    <input
                        value={postagem.municipio}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui o município da postagem"
                        name="municipio"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Tema da Postagem</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded'
                            onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um tema</option>
                        {temas.map((tema) => (
                            <>
                                <option value={tema.id} >{tema.titulo}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    disabled={carregandoTema}
                    className='flex justify-center rounded disabled:bg-primary bg-primary hover:bg-[#FEA235] 
                    font-bold w-1/2 mx-auto py-2'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default FormularioPostagem