import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='bg-secondary flex justify-center '>
            <div className='container grid grid-cols-3'>
                
                <img 
                    className='rounded-full w-56 mx-auto m-8 border-white relative ' 
                    src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

             <div 
                className="relative h-72 flex flex-col 
                 text-white text-2xl items-start justify-center gap-3">
                <p className='font-bold text-3xl gap-3'>{usuario.nome} </p>             
                <p className='text-xl'>{usuario.email}</p>
                <p className='text-xl'>{usuario.municipio}</p>
                <button className='rounded bg-primary text-white py-2 px-4 text-base font-bold'>
                    Fazer Denúncia!
                </button>
                </div>
            </div>

        </div>
    )
}

export default Perfil