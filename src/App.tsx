import Footer from './components/ui/footer'
import Header from './components/ui/Header'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
   
     <div className="container mx-auto px-4 max-w-screen-lg">
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
