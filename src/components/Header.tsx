
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <div className='text-lg text-secondary'>Luciano Guimarães Fortes</div>
      <div className="flex gap-4">
        <a href="#about" className="hover:text-purple-600"> 
          <span>Sobre mim</span>
        </a>
        <a href="#skills" className="hover:text-purple-600">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple-600"> 
          <span>Projetos</span>
        </a>

      </div>
    </header>
  )
}

