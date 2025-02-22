
export default function Projects() {
  const projects = [
    {
      title: "Projeto MyAccess (Projeto UFPI)",
      description: "Aplicação web para gerenciamento de mídias utilizando a infraestrutura da AWS.",
      backendRepo: "https://github.com/Note45/backend-myaccess",
      frontendRepo: "https://github.com/LUCIANOGFORTES02/frontend-myaccess",
      technologies: ["AWS", "TypeScript","React.js", "Express"],
      repo: null,
      live: null,
    },
    {
      title: "Projeto FWS Barber",
      description: "Sistema de reservas de barbearia, com interface responsiva e implementação do banco de dados PostgreSQL com o Supabase.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      repo: "https://github.com/LUCIANOGFORTES02/FWS-Barber",
      live: "https://fws-barber-sigma.vercel.app",
    },
    {
      title: "Curso Ignite React",
      description: "Projeto criado durante o curso Ignite de React.",
      backend: null,
      technologies: ["TypeScript", "React"],
      repo: "https://github.com/LUCIANOGFORTES02/React-Ingnite",
      live: "https://lucianogfortes02.github.io/React-Ingnite/",
    },
    {
      title: "Projeto Web Moderno Completo",
      description: "Plataforma para compartilhamento de conhecimento com artigos categorizados.",
      technologies: ["JavaScript", "Vue.js", "Bootstrap-Vue", "Express", "Knex.js", "PostgreSQL"],
      repo: "https://github.com/LUCIANOGFORTES02/ProjetoWeb",
      live: null,
    },
    {
      title: "Micro Instagram (UFPI)",
      description: "Uma aplicação web com funcionalidades do Instagram.",
      technologies: ["Python", "Flask", "JavaScript", "React.js", "Bootstrap"],
      repo: "https://github.com/es20231/eqp3",
      live: null,
    },
    {
      title: "E-commerce com React e Node.js",
      description: "Desenvolvimento de um E-commerce com ferramentas modernas.",
      technologies: ["Node.js", "Prisma", "Express", "React + Vite", "TypeScript", "Shadcn/UI"],
      repo: "https://github.com/LUCIANOGFORTES02/E-commerce",
      live: null,
    },


  ];
  

  return (
    <section id="projects" className='mt-20 px-4'>
        <h1 className='text-2xl text-secondary font-bold' >
          Projetos:
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {projects.map((project,index)=>(
                <div 
                key={index}  
                className='border-2 border-purple-700 p-6 rounded-lg flex flex-col justify-between h-[350px]  hover:shadow-lg transition-shadow duration-300 '
                >
                  {/* Título e Descrição */}
                    <div>
                      <p className='text-xl font-bold text-purple-500'>{project.title}</p>
                      <p className=" mt-2 text-base text-gray-600">{project.description}</p> 
                          
                          {/*Tecnologias*/}
                      <div>
                        {project.technologies &&(
                          <p className="text-gray-600 text-base mt-2">
                            <strong>Tecnologias:</strong> {project?.technologies?.join(", ")}
                          </p>
                          )}
                        </div>
                      </div> 
                      {/* Botões  */}
                      <div>
                        <div className="flex justify-center gap-4 mt-4">
                          {project.repo && (
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              Repositório
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-purple-700 hover:bg-purple-500 hover:text-white text-purple-500 py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            {project.backendRepo && (
                              <a
                                href={project.backendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="  bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center transition-all duration-300"
                              >
                                  Repositório Backend
                              </a>
                            )}
                            {project.frontendRepo && (
                              <a
                                href={project.frontendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center transition-all duration-300"
                              >
                                Repositório Frontend
                              </a>
                            )}
                          </div>

                          </div>
                    </div>    
            )
            )}
        </div>
    </section>
  )
}
