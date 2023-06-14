import './App.css'
import Navbar from './components/Navbar'
import Sobre from './pages/Sobre'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
import Home from './pages/Home'


function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Home/>
        <Sobre />
        <Skills />
        <Portfolio />
        <Contato />
    </div>
  )
}

export default App
