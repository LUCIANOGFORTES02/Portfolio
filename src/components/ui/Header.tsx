// import { useState } from "react";
import { Menu } from 'lucide-react';
// import { X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";





export default function Header() {

  return (
    <header className="flex justify-between items-center py-4 ">
      <div className='hidden sm:flex text-lg text-secondary'>Luciano Fortes</div>
      
      <nav className="hidden sm:flex gap-2">
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


     {/* Navegação Mobile (Sheet) */}
     <Sheet>
        {/* Trigger para abrir o Sheet no modo Mobile */}
        <SheetTrigger asChild>
          <button className="sm:hidden text-purple-600 focus:outline-none">
            <Menu className="w-8 h-8" />
          </button>
        </SheetTrigger>

        {/* Conteúdo do Sheet */}
        <SheetContent side="left" className="w-64 bg-gray-900 text-white">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold text-purple-600">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-4 flex flex-col gap-4">
          
          <SheetClose asChild>
              <a
                href="#about"
                className="hover:text-purple-400 transition duration-300"
              >
                Sobre mim
              </a>
            </SheetClose>

            <SheetClose asChild>
            <a
              href="#skills"
              className="hover:text-purple-400 transition duration-300"
            >
              Habilidades
            </a>
            </SheetClose>
            <SheetClose asChild>
            <a
              href="#projects"
              className="hover:text-purple-400 transition duration-300"
            >
              Projetos
            </a>
            </SheetClose>
            <SheetClose asChild>

            <a
              href="#contact"
              className="hover:text-purple-400 transition duration-300"
            >
              Contato
            </a>
            </SheetClose>

          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

