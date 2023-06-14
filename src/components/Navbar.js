import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = ()=> {
    return(
      <div className="nav">
        <nav className='navbar' id='navbar'>
              <h2>
                <Link to="/"> Wgleyberton </Link>
              </h2>
              <div className="Menu">
                  <a href="#sobre" >Sobre </a>
                  <a href="#habilidades"  >Habilidades </a>
                  <a href="#portfolio" >Portfólio </a>
                  <a href="#contato"  >Contato </a>
                
              </div>
        </nav>
      </div>
    )
}
export default Navbar
