import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';

import './Login.css';

function Login() {

    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return ( 
        <>
            <div className="h-screen place-items-center bg-secondary">
                <div className="flex justify-center">
                <div className="flex justify-center bg-tertiary p-20 m-12 rounded-[15px]">
                <form className="flex justify-center items-center flex-col w-full gap-6" onSubmit={login}>
                    <img 
                    src='/images/alertup-laranja.png'
                    className="h-16"/>
                    <p className="font-bold text-[#585659] text-xl">Seja muito bem-vindo!</p>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Usuário</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="endereço de e-mail"
                            className="border border-[#F95D0C] rounded p-2"
                            value={usuarioLogin.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="senha"
                            className="border border-[#F95D0C] rounded p-2"
                            value={usuarioLogin.senha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className='flex justify-center gap-4 py-2 '>
                    
                    <button
                        type='submit'
                        className="rounded flex justify-center
                        border border-black hover:bg-[#E4E4E4] text-black w-1/2 py-2 px-6">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <Link to="/"> <span>Voltar</span></Link>}
                    </button>

                        <button
                            type='submit'
                            className="rounded bg-primary flex justify-center
                                       hover:bg-[#fa023c] text-white w-1/2 py-2 px-6">
                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                               <span>Entrar</span>}
                        </button>
                    </div>

                    <hr className="bg-[#000000] w-full" />

                    <p className="text-gray-600">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-[#FF5B22] hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>

                </div>
                </div>


                <div>
                    
                </div>


                
                </div>
        </>
    );
}

export default Login;