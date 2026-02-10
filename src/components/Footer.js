import './Footer.css';

function Footer() {

    const handleClickScroll = id => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Sobre</h4>
                        <p>
                            Desenvolvedor fullstack com ênfase em backend,
                            atuando em diversas linguagens e bancos de dados
                            relacionais, focado em performance, escalabilidade e boas
                            práticas de engenharia de software.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Links rápidos</h4>
                        <ul className="footer-links">
                            <li><button className="btn-scroll" onClick={() => handleClickScroll('home')}>Início</button></li>
                            <li><button className="btn-scroll" onClick={() => handleClickScroll('sobre')}>Formação</button></li>
                            <li><button className="btn-scroll" onClick={() => handleClickScroll('portfolio')}>Portfólio</button></li>
                            <li><button className="btn-scroll" onClick={() => handleClickScroll('contato')}>Contato</button></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contatos</h4>
                        <p><b>GitHub: </b> <a href="https://github.com/Wgleyberton" target="_blank" rel="noreferrer">Wgleyberton</a></p>
                        <p><b>LinkedIn: </b> <a href="https://www.linkedin.com/in/wgleyberton/" target="_blank" rel="noreferrer">wgleyberton</a></p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {currentYear} <span>Wgleyberton Alencar</span>. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
