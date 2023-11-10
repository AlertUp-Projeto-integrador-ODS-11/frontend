import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
function Contato() {
    
    return (
        <>
            <div className="bg-[#fcfaf5e1] flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>Entre em contato</h2>
                        <div className='text-xl flex flex-wrap text-justify p-2 '>
                            <div className='m-6'>
                                <img className='w-32 h-32 rounded-full mb-4 hover:opacity-70' src="https://avatars.githubusercontent.com/u/11530020?v=4"/>
                                <a href="https://www.linkedin.com/in/brenonsc/" target ="_blank">Breno Henrique</a>
                            </div>

                            <div className='m-6'>
                                <img className='w-32 h-32 rounded-full mb-4 hover:opacity-70' src="https://media.licdn.com/dms/image/D4D03AQGoIVIx5R9Wpg/profile-displayphoto-shrink_800_800/0/1636665201514?e=1704326400&v=beta&t=wr4q_BP_ix0XjK5ZkxZNjrfdzR7cMXqMA6ZRbDImTjw"/>
                                <a href="https://www.linkedin.com/in/juliaalexandrino/" target ="_blank">Julia Alexandrino</a>
                            </div>

                            <div className='m-6'>
                                <img className='w-32 h-32 rounded-full mb-4 hover:opacity-70' src="https://media.licdn.com/dms/image/D4D03AQGhFEHF3QeIuw/profile-displayphoto-shrink_800_800/0/1687814567442?e=1704326400&v=beta&t=ia4phYTTQvh28rSbH71rugjx89Pxj2uvOgBvpgg5uVA"/>
                                <a href="https://www.linkedin.com/in/matheusqrz/" target ="_blank">Matheus Queiroz</a>
                            </div>

                            <div className='m-6'>
                                <img className='w-32 h-32 rounded-full mb-4 hover:opacity-70' src="https://media.licdn.com/dms/image/D4D03AQEp_SrI_un4cg/profile-displayphoto-shrink_800_800/0/1692669322311?e=1704326400&v=beta&t=yUAlMG-zu6RcQ-3hSsgUtCui4fT9WXxyZKm-fy9agQM"/>
                                <a href="https://www.linkedin.com/in/shomara-claudia-flores-quispe/" target ="_blank">Shomara Quispe</a>
                            </div>

                            <div className='m-6'>
                                <img className='w-32 h-32 rounded-full mb-4 hover:opacity-70' src="https://media.licdn.com/dms/image/D4E03AQFDdoW26RdAqQ/profile-displayphoto-shrink_800_800/0/1695673324279?e=1704326400&v=beta&t=p-6ceDEDN4wRC859Uh4CzYkr1NBnOZ2bhYw0GY8REwY"/>
                                <a href="https://www.linkedin.com/in/palomaferreirasilva/" target ="_blank">Paloma Ferreira</a>
                            </div>

                            <div className='m-6'>
                                <img className='w-32 h-32 rounded-full mb-4 hover:opacity-70' src="https://media.licdn.com/dms/image/D4D03AQFDfsbShDVfEQ/profile-displayphoto-shrink_800_800/0/1699473162865?e=1704931200&v=beta&t=J1kiIBpzMs0Qo2A_8317VUc2XXOMOSXY-cBK-o97ohg"/>
                                <a href="https://ww.linkedin.com/in/victorpaliari" target ="_blank">Victor Paliari</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="./src/assets/contact-page.svg"
                            alt="Imagem Página Contato"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contato