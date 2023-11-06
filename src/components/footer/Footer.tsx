import { Link, useNavigate } from "react-router-dom";
import { GitHub } from 'react-feather'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#e9a028] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            AlertUp! | Copyright {data}
                        </p>
                    <p className='text-lg'>Acesse nosso GitHub:</p>
                    <div className='flex gap-2'>
                        <Link to='https://github.com/AlertUp-Projeto-integrador-ODS-11' target="_blank" className='hover:opacity-70'><GitHub size={48} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer