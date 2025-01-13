
export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-12 ">
      {/*Imagem de Perfil */}
      <div className="flex items-center justify-center ">
        {/* <div className=" bg-purple-500 rounded-full w-80 h-80 "> */}
        <img
          src="/Image Profile.jpeg"
          alt="Luciano Fortes"
          className="rounded-full w-60 h-60 shadow-lg"
        />
        </div>
      {/* </div> */}

      {/* Texto */}
      <div className="flex flex-1 flex-col justify-center ">
        <h1 className="text-2xl md:text-left">
          Olá, eu sou
        </h1>
        <h2 className="text-4xl font-bold "> 
          Luciano Guimarães Fortes
        </h2> 
        <p className="mt-4 text-lg text-left">
          Estudante de Ciência da Computação com habilidades em JavaScript, Java e experiência em frameworks como React.js, Vue.js e node.js.

        </p>
        <div className="flex gap-3 mt-8">
          <button className="bg-purple-700 hover:bg-purple-600 py-2 px-4 rounded transition-all duration-300" >About me</button>
          <button className="border-2  border-purple-500 hover:bg-purple-700 py-2 px-4 rounded transition-all duration-300" >Projects</button>
        </div>
      </div>



      
    </section>
    
    
  )
}
