import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Postagem from '../../../models/Postagem';
import CardPostagens from '../cardPostagens/CardPostagens';
import {toastAlerta} from "../../../utils/toastAlerta.ts";
import ModalPostagem from '../modalPostagem/ModalPostagem.tsx';


function ListaPostagens() {


    const navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
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
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    return (
        <>
            {postagens.length === 0 && (
                <div className='flex justify-center w-full absolute top-2/3'>
                <Oval
                    height={80}
                    width={80}
                    color="#F95D0C"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#FFFF"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
              </div>
            )}

            <div className='container mx-auto my-4 
            flex flex-col-reverse justify-center items-center gap-4'>

                {postagens.map((postagem) => (
                    <CardPostagens key={postagem.id} post={postagem} foto={postagem.foto}/>
                ))}

            </div>
            
        </>
    )
}

//container mx-auto mt-24 flex flex-col justify-center items-center

export default ListaPostagens