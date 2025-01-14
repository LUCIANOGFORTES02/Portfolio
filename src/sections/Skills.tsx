import { Laptop } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";

export default function Skills() {
  return (
    <section id='skills' className='mt-8'>
        <h1 className='text-2xl text-secondary  font-bold'>Habilidades:</h1>
        
        {/* Habilidades */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 h-auto mt-4'>
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
