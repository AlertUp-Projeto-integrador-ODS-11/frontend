import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
                 text-white text-xl items-start justify-center gap-3">
                <p className='font-bold text-3xl gap-3'>{usuario.nome} </p>             
                <p >{usuario.email}</p>
                <p >{usuario.municipio}</p>
                <div className="flex justify-around gap-4 text-sm">
                    <Link to={`/cadastroPostagem`} className=' text-white font-bold w-full bg-primary hover:bg-[#FEA235]
                            flex items-start justify-center p-3 px-6 rounded-md '>
                            <button>Cadastrar Postagem</button>
                    </Link>
                    </div>
            </div>
                
                </div>

        </div>
    )
}

export default Perfil