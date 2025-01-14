
export default function Home() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-12 ">
      {/*Imagem de Perfil */}
      <div className="flex items-center justify-center ">
        <img
          src="/Image Profile.jpeg"
          alt="Luciano Fortes"
          className="rounded-full w-60 h-60 shadow-lg"
        />
        </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col justify-center ">
        <h1 className="text-2xl md:text-left">
          Olá, eu sou
        </h1>
        <h2 className="text-4xl font-bold "> 
          Luciano Guimarães Fortes
        </h2> 
        <p className="mt-4 text-lg text-left">
        Estudante de Ciência da Computação apaixonado por tecnologia e inovação. 
        

        </p>
        <div className="mt-6">
          <a
            href="/Luciano Guimarães Fortes (3).pdf"
            download
            className="bg-purple-700 text-white py-2 px-6 rounded-lg shadow hover:bg-purple-600 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>



      
    </section>
    
    
  )
}