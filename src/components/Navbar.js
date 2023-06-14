import "./Navbar.css"
const Navbar = ()=> {
  
  
  const handleClickScroll = id => {
    const page = id

    const element = document.getElementById(page);
    console.log(element)
    
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  };
     
 
    return(
      <div className="nav" id="nav">
        <nav className='navbar' id='navbar'>
             
              <h2>
                <button className="btn-scroll" onClick={() => handleClickScroll('home')}>Wgleyberton</button>
              </h2>
              
              <div className="Menu">

              <button className="btn-scroll" onClick={() => handleClickScroll('sobre')}>Sobre</button>
              <button className="btn-scroll" onClick={() => handleClickScroll('habilidades')}>Habilidades</button>
              <button className="btn-scroll" onClick={() => handleClickScroll('portfolio')}>Portfólio</button>
              <button className="btn-scroll" onClick={() => handleClickScroll('contato')}>Contato</button>
                                  
              </div>
        </nav>
      </div>
    )
}
export default Navbar
