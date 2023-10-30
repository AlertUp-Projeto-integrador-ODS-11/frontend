import { Link, useNavigate } from "react-router-dom";
import { Home, Book, PlusCircle, User, LogOut } from 'react-feather';

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
                    AlertUp
                    <div className="flex gap-4">
                        <Home className="text-white h-6 w-6" />
                        <Book className="text-white h-6 w-6" />
                        <PlusCircle className="text-white h-6 w-6" />
                        <User className="text-white h-6 w-6" />
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                        <LogOut className="text-white h-6 w-6" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;