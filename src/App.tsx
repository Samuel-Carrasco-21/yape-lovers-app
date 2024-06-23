import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { OurServices } from './components/OurServices'
import { Tours } from './components/Tours'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <OurServices/>
      <Tours/>
      <Footer/>
    </>
  )
}

export default App
