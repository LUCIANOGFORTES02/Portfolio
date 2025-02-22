import { useState } from "react";
import { Menu, X } from "lucide-react"; // Importe o ícone "X" para fechar o menu
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen); // Alterna entre abrir e fechar o menu
  };

  const handleNavigation = (href:any) => {
    setIsOpen(false); // Fecha o menu ao clicar em um link
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Pequeno atraso para garantir que o menu foi fechado
  };

  return (
    <header className="flex justify-between py-4 px-6 shadow-md">
      <div className="text-xl font-bold text-secondary">Luciano Fortes</div>

      {/* Menu para desktop */}
      <nav className="hidden md:flex gap-3">
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

      {/* Botão para abrir/fechar o menu no mobile */}
      <div className="md:hidden flex">
        <Button variant="outline" size="icon" onClick={handleToggleMenu}>
          {isOpen ? <X /> : <Menu />} {/* Alterna entre os ícones de Menu e X */}
        </Button>
      </div>

      {/* Menu lateral para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={handleToggleMenu} // Fecha o menu ao clicar fora dele
        >
          <div
            className="fixed inset-y-0 right-0 w-3/5 bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Impede que o clique no menu feche-o
          >
            <div className="flex justify-end">
              <Button variant="outline" size="icon" onClick={handleToggleMenu}>
                <X /> {/* Ícone para fechar o menu */}
              </Button>
            </div>
            <div className="border-b border-solid border-secondary p-5 text-left">
              Menu
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Button
                asChild
                variant="outline"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("#about");
                }}
              >
                <a href="#about">Sobre mim</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("#skills");
                }}
              >
                <a href="#skills">Habilidades</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("#projects");
                }}
              >
                <a href="#projects">Projetos</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("#contact");
                }}
              >
                <a href="#contact">Contato</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}