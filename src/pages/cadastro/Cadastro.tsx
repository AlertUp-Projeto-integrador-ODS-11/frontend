import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { cadastrarUsuario } from '../../services/Service'

import Usuario from '../../models/Usuario'
import { toastAlerta } from "../../utils/toastAlerta";
import './Cadastro.css'

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    municipio: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        toastAlerta('Usuário cadastrado com sucesso!', "sucesso")

      } catch (error) {
        toastAlerta('Erro ao cadastrar o usuário. Tente novamente!', "erro")
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro!', "erro")
      setUsuario({ ...usuario, senha: "" })
      setConfirmaSenha("")
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center">
        <div className="fundoCadastro hidden lg:block"></div>
        <form
          className='flex justify-center items-center flex-col w-2/3 gap-3'
          onSubmit={cadastrarNovoUsuario}>

          <img
            src='/images/Alertup-laranja-v2.png'
            className="h-16" />

          <h2 className="font-bold text-2xl text-[#585659]">Cadastre-se e faça a sua denúncia</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="seu nome"
              className="border border-[#F95D0C] rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="endereço de e-mail"
              className="border border-[#F95D0C] rounded p-2"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="foto de perfil"
              className="border border-[#F95D0C] rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Município</label>
            <input
              type="text"
              id="municipio"
              name="municipio"
              placeholder="seu município"
              className="border border-[#F95D0C] rounded p-2"
              value={usuario.municipio}
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
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="confirme sua senha"
              className="border border-[#F95D0C] rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8 mt-6">
            <button
              className='rounded border-2 border-[#585659] hover:bg-[#E4E4E4] w-1/2 py-2'
              onClick={retornar}>
              Cancelar
            </button>
            <button
              className='rounded text-white bg-primary hover:bg-[#FEA235] w-1/2 py-2 flex justify-center'
              type='submit'>
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Cadastrar</span>}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro