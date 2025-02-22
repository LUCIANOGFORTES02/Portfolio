import { FaGithub, FaGlobe } from 'react-icons/fa'; 

export default function Projects() {
  const projects = [
    {
      title: "Projeto MyAccess (Projeto UFPI)",
      description: "Aplicação web, desenvolvida em equipe, para gerenciamento de mídias utilizando infraestrutura AWS. Fui responsável pelo desenvolvimento do frontend e integração com o backend.",
      role: "Desenvolvi o frontend e integrei com o backend.",
      technologies: ["AWS", "TypeScript","React.js","Node.js", "Express"],
      backendRepo: "https://github.com/Note45/backend-myaccess",
      frontendRepo: "https://github.com/LUCIANOGFORTES02/frontend-myaccess",
      live: null,
    },
    {
      title: "Projeto FWS Barber",
      description: "Sistema de reservas de barbearia com interface responsiva e banco de dados PostgreSQL utilizando Supabase.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      repo: "https://github.com/LUCIANOGFORTES02/FWS-Barber",
      live: "https://fws-barber-sigma.vercel.app",
    },
    {
      title: "React Ignite (Curso Rocketseat)",
      description: "Projeto para aprimorar habilidades em React e TypeScript.",
      technologies: ["TypeScript", "React"],
      repo: "https://github.com/LUCIANOGFORTES02/React-Ingnite",
      live: "https://lucianogfortes02.github.io/React-Ingnite/",
    },
    {
      title: "Web Moderno Completo (Udemy)",
      description: "Plataforma para compartilhamento de artigos com categorias, usando Vue.js no frontend e APIs RESTful no backend.",
      technologies: ["JavaScript", "Vue.js", "Bootstrap-Vue", "Express", "Knex.js", "PostgreSQL"],
      repo: "https://github.com/LUCIANOGFORTES02/ProjetoWeb",
      live: null,
    },
    {
      title: "Micro Instagram (UFPI)",
      description: "Aplicação web inspirada no Instagram, permitindo postagens e interações básicas. Projeto desenvolvido em equipe com backend em Flask e frontend em React.",
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
    <section id="projects" className='mt-12 px-4'>
        <h1 className='text-3xl text-secondary font-bold mb-6' >
          Projetos:
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {projects.map((project,index)=>(
                <div 
                key={index}  
                className='flex flex-col justify-between border border-purple-700 p-4 rounded-lg shadow-lg hover:shadow-2xl  transition-shadow duration-300  '
                >
                  {/* Título e Descrição */}
                    <div>
                      <p className='text-xl font-bold text-purple-600'>{project.title}</p>
                      <p className="text-justify mt-2 text-base text-gray-700 ">{project.description}</p> 
                          
                          {/*Tecnologias*/}
                      <div>
                        {project.technologies &&(
                          <p className="text-gray-600 text-sm text-justify mt-3">
                            <strong>Tecnologias:</strong> {project?.technologies?.join(", ")}
                          </p>
                          )}
                        </div>
                      </div> 
                      {/* Botões  */}
                      <div>
                        <div className="flex  justify-center gap-3 mt-4">
                          {project.repo && (
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 border border-purple-700  hover:bg-purple-600 hover:text-white text-purple-500  py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              <FaGithub className="w-5 h-5" />Repositório
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center  gap-2 border border-purple-700 hover:bg-purple-500 hover:text-white text-purple-500 py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              <FaGlobe className="w-5 h-5" /> Acessar
                              </a>
                          )}
                        </div>
                        <div className="flex justify-center gap-3">
                            {project.backendRepo && (
                              <a
                                href={project.backendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center  gap-2 border border-purple-700 hover:bg-purple-500 hover:text-white text-purple-500 py-2 px-4 rounded-lg transition-all duration-300"
                              >
                                   <FaGithub className="w-5 h-5" />Backend
                              </a>
                            )}
                            {project.frontendRepo && (
                              <a
                                href={project.frontendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center  gap-2 border border-purple-700 hover:bg-purple-500 hover:text-white text-purple-500 py-2 px-4 rounded-lg transition-all duration-300"
                              >
                                 <FaGithub className="w-5 h-5" />Frontend
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
