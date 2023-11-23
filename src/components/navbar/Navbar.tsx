import { Link, useNavigate } from "react-router-dom";
import { ReactNode, useContext } from 'react';
import { User, LogOut } from 'react-feather';

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta("Usuário deslogado com sucesso!", "sucesso");
        navigate("/login")
    }

    let component: ReactNode

    if (usuario.token !== "") {


        component = (
            <div className='w-full bg-primary text-white
                flex justify-center py-5 px-10'>

                <div className="container justify-between flex items-center ... text-lg ">
                    <Link to='/home' title="Home" className='hover:opacity-80'>
                        <img src="/images/Alertup-icone-roxo.png" alt="AlertUp Logo" className="h-12 mr-4" /> </Link>

                    <div className="flex gap-6 ">
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/vertemas' className='hover:underline'>Temas</Link>
                        <Link to='/perfil' title="Perfil" className='hover:opacity-70'><User className="text-white h-8 w-8" /></Link>
                        <Link to='' title="Sair" onClick={logout} className='hover:opacity-70'><LogOut className="text-white h-8 w-8" /></Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {component}
        </>
    )
}

export default Navbar;