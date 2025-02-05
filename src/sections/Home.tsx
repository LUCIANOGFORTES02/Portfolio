
export default function Home() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 items-center">
      {/*Imagem de Perfil */}
      <div className="flex items-center justify-center ">
        <img
          src="/ImageProfile3.jpeg"
          alt="Luciano Fortes"
          className="rounded-full w-60 h-60 shadow-lg"
        />
        </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col justify-center md:text-left ">
        <h1 className="text-2xl">
          Olá, eu sou
        </h1>
        <h2 className="text-4xl font-bold "> 
          Luciano Guimarães Fortes
        </h2> 
        <p className="text-justify mt-4 text-lg ">
        Estudante de Ciência da Computação apaixonado por tecnologia e inovação.           Atualmente, estou focado em desenvolver aplicações impactantes que combinem tecnologia e inovação, sempre buscando desafios que me permitam crescer e aprender.
        

        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="/Luciano Guimarães Fortes.pdf"
            download
            className="bg-purple-700 text-white py-2 px-6 rounded-lg shadow hover:bg-purple-600 transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="border border-purple-700 text-purple-700 py-2 px-6 rounded-lg shadow hover:bg-purple-700 hover:text-white transition-all duration-300"
          >
            Meus Projetos
          </a>
        </div>
      </div>



      
    </section>
    
    
  )
}
