import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


const App = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content transition-colors duration-300">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
