import Header from './components/Header'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='px-8 md:px-12 lg:px-24 gap-8 '>
    <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  )
}

export default App
