import { Laptop } from 'lucide-react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiPython, SiMongodb } from "react-icons/si";
import { AiOutlineTeam, } from "react-icons/ai";

export default function Skills() {
  return (
    <section id='skills' className='mt-20'>
      <h1 className='text-2xl text-secondary font-bold'>Habilidades:</h1>
      
      {/* Habilidades */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-auto mt-4'>
        
        <div className='flex flex-col justify-end items-start bg-purple-700 rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <Laptop className="w-16 h-16 mb-1" />
          <p className="text-lg font-bold">Desenvolvimento Web</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <FaReact className="w-16 h-16 mb-1 text-blue-400" />
          <p className="text-lg font-bold">React.js</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <SiTypescript className="w-16 h-16 mb-1 text-blue-500" />
          <p className="text-lg font-bold">TypeScript</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <SiPython className="w-16 h-16 mb-1 text-yellow-400" />
          <p className="text-lg font-bold">Python</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <FaNodeJs className="w-16 h-16 mb-1 text-green-500" />
          <p className="text-lg font-bold">Node.js</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <SiPostgresql className="w-16 h-16 mb-1 text-blue-400" />
          <p className="text-lg font-bold">PostgreSQL</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <SiMongodb className="w-16 h-16 mb-1 text-green-400" />
          <p className="text-lg font-bold">MongoDB</p>
        </div>

        <div className='flex flex-col justify-end items-start bg-blueDark rounded-lg px-4 py-4 hover:scale-105 transition-transform'>
          <AiOutlineTeam className="w-16 h-16 mb-1 text-purple-500" />
          <p className="text-lg font-bold">Trabalho em Equipe</p>
        </div>
        
      </div>
    </section>
  );
}
