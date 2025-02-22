// import { useState } from "react";
// import { X } from 'lucide-react';





export default function Header() {

  return (
    <header className="flex justify-between items-center py-4 px-4">
      <div className='hidden sm:flex text-lg text-secondary'>Luciano Fortes</div>
      
      <nav className="flex items-center justify-center  gap-2">
        <a href="#about" className="hover:text-purple-600"> 
          <span>Sobre mim</span>
        </a>
        <a href="#skills" className="hover:text-purple-600">
          Habilidades
        </a>
        <a href="#projects" className="hover:text-purple-600"> 
          <span>Projetos</span>
        </a>
        <a href="#contact" className="hover:text-purple-600"> 
          <span>Contato</span>
        </a>

      </nav>

    </header>
  )
}

