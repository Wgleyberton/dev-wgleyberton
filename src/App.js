import './App.css'
import Navbar from './components/Navbar'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  return (
    <div className='App'>
        <Navbar />
        <Home />
        <Sobre />
        <Portfolio />
        <Contato />
        <Footer />
    </div>
  )
}

export default App
