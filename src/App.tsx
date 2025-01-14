import Footer from './components/footer'
import Header from './components/Header'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <div className='px-8 md:px-12 lg:px-24 gap-8 '>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills></Skills>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
