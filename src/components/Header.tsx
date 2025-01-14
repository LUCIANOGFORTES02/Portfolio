
export default function Header() {
  return (
    <header className="flex justify-between py-4">
      <div className='text-lg text-secondary'>Luciano Guimarães Fortes</div>
      <div className="flex justify-end px-6 gap-8">
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
      </div>
    </header>
  )
}
