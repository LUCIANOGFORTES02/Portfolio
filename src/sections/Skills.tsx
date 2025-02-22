import { Laptop } from 'lucide-react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiPython, SiAngular,SiNextdotjs } from "react-icons/si";
// import { AiOutlineTeam, } from "react-icons/ai";


export default function Skills() {
  return (
    <section id='skills' className='mt-12 px-4'>
      <h1 className='text-3xl text-secondary font-bold'>Habilidades:</h1>
      
      {/* Habilidades */}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 h-auto mt-4'>
        
        <div className='flex flex-col items-center rounded-lg px-4 py-4  bg-gradient-to-r from-blue-400 to-purple-500 '>
          <Laptop className="w-16 h-16 mb-1" />
          <p className="text-base md:text-lg  font-bold">Desenvolvimento Web</p>
        </div>

        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <FaReact className="w-16 h-16 mb-1 text-blue-400" />
          <p className="text-base md:text-lg font-bold">React.js</p>
        </div>
        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <SiNextdotjs className="w-16 h-16 mb-1 " />
          <p className="text-base md:text-lg  font-bold">Next.js</p>
        </div>
        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <SiAngular className="w-16 h-16 mb-1 text-red-400" />
          <p className="text-base md:text-lg font-bold">Vue</p>
        </div>

        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <SiTypescript className="w-16 h-16 mb-1 text-blue-500" />
          <p className="text-base md:text-lg  font-bold">TypeScript</p>
        </div>

        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <SiPython className="w-16 h-16 mb-1 text-yellow-400" />
          <p className="text-base md:text-lg font-bold">Python</p>
        </div>

        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <FaNodeJs className="w-16 h-16 mb-1 text-green-500" />
          <p className="text-base md:text-lg  font-bold">Node.js</p>
        </div>

        <div className='flex flex-col items-center bg-blueDark rounded-lg px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500'>
          <SiPostgresql className="w-16 h-16 mb-1 text-blue-400" />
          <p className="text-base md:text-lg font-bold">PostgreSQL</p>
        </div>
        
        
      </div>
    </section>
  );
}
