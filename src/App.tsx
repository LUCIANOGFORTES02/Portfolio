import Footer from './sections/footer'
import Header from './sections/Header'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
   
     <div className="container mx-auto max-w-screen-lg">
     <Header />
     <Home />
     <AboutMe />
     <Skills />
     <Projects />
     <Footer />
   </div>
  )
}

export default App
