export default function Footer() {
    return (
      <footer id="contact" className="flex flex-col justify-center items-center py-6  text-gray-400 text-center">
        <p>Desenvolvido por Luciano Fortes</p>
        <p>
        <a href="" className="flex text-purple-500 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/seu-linkedin" className="flex text-purple-500 hover:underline">
            LinkedIn
          </a>
          <a href="mailto:lucianogfortes02@gmail.com" className="flex text-purple-500 hover:underline">
            E-mail
          </a>
        </p>
      </footer>
    );
  }