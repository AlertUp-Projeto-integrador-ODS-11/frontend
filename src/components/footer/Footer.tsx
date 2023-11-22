import { Link, useNavigate } from "react-router-dom";
import { GitHub } from 'react-feather'
import { Home, Mail, PlusCircle, Users, LogOut } from 'react-feather';


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>

            <div className='w-full bg-secondary text-white flex justify-center py-5'>

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
        </>
    )
}

export default Footer