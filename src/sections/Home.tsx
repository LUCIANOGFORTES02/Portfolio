
export default function Home() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 items-center px-4">
      {/*Imagem de Perfil */}
<div className="flex items-center justify-center">
  <img
    src="/luciano_288.jpg"                 // fallback
    srcSet="
      /luciano_192.jpg 192w,
      /luciano_240.jpg 240w,
      /luciano_288.jpg 288w,
      /luciano_384.jpg 384w,
      /luciano_512.jpg 512w,
      /luciano_640.jpg 640w,
      /luciano_768.jpg 768w
    "
    sizes="(min-width: 1024px) 18rem, (min-width: 768px) 15rem, 12rem"
    alt="Luciano Fortes"
    className="rounded-full w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 shadow-lg object-cover"
    loading="eager"
    decoding="async"
  />
</div>

      {/* Texto */}
      <div className="flex flex-1 flex-col justify-center md:text-left ">
        <h1 className="text-2xl text-foreground-secondary">
          Olá, eu sou
        </h1>
        <h2 className="text-4xl font-bold  text-purple-700 "> 
          Luciano Guimarães Fortes
        </h2> 
        <p className="text-justify  mt-4 text-lg leading-relaxed text-foreground ">
        Estudante de Ciência da Computação apaixonado por tecnologia e inovação. Atualmente, estou focado em desenvolver aplicações impactantes que combinem tecnologia e inovação, sempre buscando desafios que me permitam crescer e aprender.
        

        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a 
            href="/Currículo_Luciano_Guimarães_Fortes.pdf"
            download
            className="bg-purple-700 text-white py-2 px-6 rounded-lg shadow hover:bg-purple-600 transition-all duration-300 font-semibold"
          >
            📄 Download CV
          </a>
          <a
            href="#projects"
            className="border border-purple-700 text-purple-700 py-2 px-6 rounded-lg shadow hover:bg-purple-700 hover:text-white transition-all duration-300 font-semibold"
          >
             🚀 Meus Projetos
          </a>
        </div>
      </div>



      
    </section>
    
    
  )
}
