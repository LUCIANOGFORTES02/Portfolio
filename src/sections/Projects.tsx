
export default function Projects() {
  const projects = [
    {
      title: "Projeto MyAccess (Projeto UFPI)",
      description: "Aplicação web para gerenciamento de mídias utilizando a infraestrutura da AWS.",
      backend: ["JavaScript","Express"],
      frontend: ["TypeScript", "React.js" ],
      backendRepo: "https://github.com/Note45/backend-myaccess",
      frontendRepo: "https://github.com/LUCIANOGFORTES02/frontend-myaccess",
      technologies: ["AWS", "React", "Node.js", "Express"],
      repo: null,
      live: null,
    },
    {
      title: "Projeto Web Moderno Completo",
      description: "Plataforma para compartilhamento de conhecimento com artigos categorizados.",
      backend: ["JavaScript", "Knex.js", "Mongoose", "Postgres", "Express"],
      frontend: ["Vue.js", "Axios", "Bootstrap-Vue"],
      repo: "https://github.com/LUCIANOGFORTES02/ProjetoWeb",
      live: null,
    },
    {
      title: "Micro Instagram (UFPI)",
      description: "Uma aplicação web com funcionalidades do Instagram.",
      backend: ["Python", "Flask"],
      frontend: ["JavaScript", "React.js", "Bootstrap"],
      repo: "https://github.com/es20231/eqp3",
      live: null,
    },
    {
      title: "E-commerce com React e Node.js",
      description: "Desenvolvimento de um E-commerce com ferramentas modernas.",
      backend: ["Prisma", "JavaScript", "Node.js", "Express"],
      frontend: ["React", "Vite", "Shadcn/ui", "TypeScript"],
      repo: "https://github.com/LUCIANOGFORTES02/E-commerce",
      live: null,
    },

    {
      title: "Curso Ignite React",
      description: "Projeto criado durante o curso Ignite de React.",
      backend: null,
      frontend: ["TypeScript", "React"],
      repo: "https://github.com/LUCIANOGFORTES02/React-Ingnite",
      live: "https://lucianogfortes02.github.io/React-Ingnite/",
    },
    {
      title: "Curso PROWAY Angular",
      description: "Aplicação desenvolvida durante o curso PROWAY de Angular.",
      backend: null,
      frontend: ["TypeScript", "Angular CLI"],
      repo: "https://github.com/LUCIANOGFORTES02/PROWAY-ANGULAR",
      live: null,
    },

  ];
  

  return (
    <section id="projects" className='mt-20'>
        <h1 className='text-2xl text-secondary font-bold' >
          Projetos:
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {projects.map((project,index)=>(
                <div 
                key={index}  
                className='border-2 border-purple-700 p-6 rounded-lg flex flex-col justify-between h-[275px] md:h-[350px]  hover:shadow-lg transition-shadow duration-300 '
                >
                    <div>
                      <p className='text-xl font-bold text-purple-500'>{project.title}</p>
                      <p className=" mt-2 text-gray-400">{project.description}</p> 
                          
                          {/*Tecnologias*/}
                      <div>
                        {project.backend &&(
                          <p className="text-gray-400 text-sm mt-2">
                            <strong>Backend:</strong> {project?.backend?.join(", ")}
                          </p>
                          )}
                          {project.frontend && (
                            <p className="text-gray-400 text-sm mt-2">
                              <strong>Frontend:</strong> {project.frontend.join(", ")}
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
                                className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300"
                              >
                                  Repositório do Backend
                              </a>
                            )}
                            {project.frontendRepo && (
                              <a
                                href={project.frontendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300"
                              >
                                Repositório do Frontend
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
