




export default function AboutMe() {
  return (
    <section id='about' className='mt-12 px-4  max-w-4xl mx-auto' >
        <div >
            {/* Descrição */}
            <h1 className='text-3xl  text-purple-700  font-bold'>Sobre mim:</h1>
            <p className='text-justify mt-4 leading-relaxed text-lg'>
                Sou estudante de Ciência da Computação pela UFPI, apaixonado por tecnologia e inovação. Minha trajetória acadêmica e profissional me proporcionou uma sólida base em desenvolvimento de software, análise de dados e projetos colaborativos.
            </p>
            {/* Experiência */}
            <h2 className='text-xl font-semibold text-purple-700 mt-6 mb-2'>Experiência acadêmica e prática</h2>
            <p className='text-justify mt-4 leading-relaxed text-lg'>
                Participei de uma pesquisa científica focada na análise preditiva e identificação de padrões para reduzir roubos e furtos de automóveis, utilizando Python e Machine Learning. Além disso, durante meu estágio no Laboratório de Engenharia de Software da UFPI, desenvolvi um sistema interativo para análise de informações acadêmicas, utilizando React.js e processamento de dados XML.
            </p>
            <p className='text-justify leading-relaxed mt-4 text-lg'>
            Recentemente concluí o desenvolvimento de uma aplicação web hospedada na AWS para gerenciamento de mídias, utilizando tecnologias modernas como Node.js e React. 
            Atualmente, continuo me aprofundando nos serviços da AWS e busco novos desafios que me permitam evoluir como desenvolvedor.
           </p>
        </div>

    </section>
    
        
  )
}
