import { Laptop } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";




export default function AboutMe() {
  return (
    <section className='mb-2 mt-2' >
        <div className='mt-24'>
            {/* Título e Descrição */}
            <h1 className='text-2xl text-secondary  font-bold'>About me:</h1>
            <p className='mt-4 text-lg'>Sou estudante de Ciência da Computação
            com habilidades em JavaScript, Java e 
            experiência em frameworks como React.js, 
            Vue.js e node.js.Meus objetivos de carreira incluem continuar 
            a crescer como desenvolvedor de software, 
            aprimorar minhas habilidades em front-end 
            e back-end, e contribuir para projetos 
            inovadores que tenham um impacto positivo 
            na vida das pessoas. Estou ansioso para 
            novos desafios que me permitam aprender e 
            crescer, enquanto trabalho em equipes 
            colaborativas e criativas.</p>

        </div>
         {/* Experiência */}
        <div>

        </div>
        {/* Habilidades */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 h-auto'>
            <div className='flex flex-col justify-end items-start bg-purple-700 rounded-lg px-4 py-4 overflow-hidden'>
                <Laptop className="w-16 h-16 mb-1" />
                <p className="text-lg font-bold  ">Desenvolvimento Web</p>
            </div>

            <div className='flex flex-col justify-end items-start bg-blueDark  rounded-lg  px-4 py-4 overflow-hidden'>
                <FaReact className="w-16 h-16 mb-1"/>
                <p className="text-lg font-bold ">React</p>
            </div>

            <div className=' flex flex-col justify-end items-start bg-blueDark  rounded-lg  px-4 py-4 overflow-hidden'>
                <SiTypescript className="w-16 h-16 mb-1" />
                <p className="text-lg font-bold">TypeScript</p>
            </div>

            <div className='flex flex-col justify-end items-start bg-blueDark  rounded-lg  px-4 py-4 overflow-hidden'>
                <AiOutlineTeam  className="w-16 h-16 mb-1"/>
                <p className="text-lg font-bold">Trabalho em Equipe</p>
            </div>
            

        </div>


    </section>
    
        
  )
}
