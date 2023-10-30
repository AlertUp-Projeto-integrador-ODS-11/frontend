import { Link, useNavigate } from "react-router-dom";
import { Home, Mail, PlusCircle, Users, LogOut } from 'react-feather';

function Navbar (){

    const navigate = useNavigate();

    function logout(){
        alert("Usuário deslogado com sucesso!");
        navigate("/")
    }

    return (
        <>
            <div className='w-full bg-primary text-white
                flex justify-center py-5'>

                <div className="container flex justify-between text-lg">
                <img
                        src="/src/assets/alertup-logo.png"
                        alt="AlertUp Logo"
                        className="h-8 mr-2"
                    />

                    <div className="flex gap-4">
                        <Link to='/home' className='hover:opacity-70'><Home className="text-white h-6 w-6" /></Link>
                        <Link to='/' className='hover:opacity-70'><PlusCircle className="text-white h-6 w-6" /></Link>
                        <Link to='/contato' className='hover:opacity-70'><Mail className="text-white h-6 w-6" /></Link>
                        <Link to='/sobrenos' className='hover:opacity-70'><Users className="text-white h-6 w-6" /></Link>
                        <Link to='' onClick={logout} className='hover:opacity-70'><LogOut className="text-white h-6 w-6" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;