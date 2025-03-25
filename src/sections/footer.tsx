import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
      <footer id="contact" className="   border-t py-4 mt-12">
        <div className="  mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          
          {/* Seção de Contato */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Entre em Contato</h2>
            <p className="text-gray-400 mb-2">
              Vamos criar algo incrível juntos? Entre em contato comigo por e-mail ou redes sociais.
            </p>
            <p className="flex items-center text-purple-500 mb-1">  
            <strong>Telefone:</strong>
              . (86)98835-5123
            </p>
            
            
            <div className="flex space-x-4">
              <a
                href="mailto:lucianogfortes02@gmail.com"
                className="text-purple-500 hover:text-purple-600 text-2xl"
                title="E-mail"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/LUCIANOGFORTES02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 text-2xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/seu-linkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 text-2xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>
  
          {/* Links Rápidos */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-500">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-500">
                  Projetos
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Mensagem Final */}
        <div className="mt-8 text-center text-gray-400">
          <p>Desenvolvido por Luciano Fortes. © 2025</p>
        </div>
      </footer>
    );
  }
  