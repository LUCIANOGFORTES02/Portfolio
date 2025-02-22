import Footer from './sections/footer'
import Header from './sections/Header'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
   
     <div className='flex flex-col'>
     <Header />
      <main className=" mx-auto max-w-screen-lg"> 
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
      </main>

     <Footer />
   </div>
  )
}

export default App
