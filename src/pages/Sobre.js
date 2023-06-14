import React from "react";
import { useEffect } from "react";
import "./Sobre.css"
import VanillaTilt from "vanilla-tilt"




const Sobre = () => {

    const vanilla = VanillaTilt.init(document.querySelectorAll(".experiencias-card"), {
        max:25,
        speed:400,
        glare:true,
        "max-glare": 1
    
    })
    useEffect((vanilla) => {
        vanilla = VanillaTilt.init(document.querySelectorAll(".experiencias-card"), {
            max:25,
            speed:400,
            glare:true,
            "max-glare": 1
        
        })
    },[vanilla])
    return(
        
        <div className="sobre" id="sobre">
                <div className="container-sobre">
                    <div className="apresentacao">
                    <h2>Prazer,</h2>
                        <p>
                            Tenho 33 anos, formado em <span>Sistemas de Informação</span>,  
                            apaixonado por <span>tecnologia</span> e inovação. <br/> Possuo <span>5 anos</span> de experiência em <span>suporte técnico</span> e <span>3 anos</span> de experiência em <span>desenvolvimento</span> e <span>programação</span> adquiridos através de projetos de curto prazo, estágios e experiências profissionais.
                            Atualmente estou buscando realocação profissional visando atuar de forma <span>fullstack</span> me dedicando a estudar novas linguagens com o intuito de ampliar meu leque de conhecimento para atender as exigências do mercado de trabalho.
                        </p>
                    </div>
                    <div className="cursos">
                    <span><h2>Certificações:</h2></span>
                        <p>Scrum fundamentals certified - ScrumStudy.</p>
                        
                        <span><h2>Cursos:</h2></span>
                        <p>Desenvolvimento de aplicativos para plataforma iOS.</p> 
                        <p>Developer.Net (Asp.net com C#.net).</p>
                        <p>FullStack Javascript - Node.js, React.js, Next.js (em conclusão)</p>
                        <p>Desenvolvimento Web Avançado com PHP, Laravel e VUE.js (em conclusão</p>

                    </div>
                    <div className="experiencias">
                    <h1>Experiências</h1>
                        <div className="cards-exp">
                                <div className="experiencias-card">   
                                    <h2>Desenvolvedor iOS</h2>
                                    <p>
                                    Desenvolvimento e implantação de aplicativos mobile na plataforma <span>iOS </span>
                                    utilizando linguagem de programação <span>SWIFT</span> e <span>objective C </span>, padrão de desenvolvimento
                                    <span> CleanSwift</span> e metodologia <span>SCRUM</span>.</p>
                                </div>
                                <div className="experiencias-card">
                                    <h2>Desenvolvedor de aplicativos Mobile</h2>
                                    <p> 
                                    Desenvolvimento e implantação de aplicativos mobile na plataforma <span>iOS </span>
                                    utilizando linguagem de programação <span>SWIFT</span> e <span>objective C</span>.
                                    </p>
                                </div>
                                <div className="experiencias-card">
                                <h2>Desenvolvedor WEB</h2>
                                    <p>
                                    Desenvolvimento de aplicações em <span>ASP.NET</span> e <span>C#</span> com <span>Entity</span> framework e
                                    <span> MVC</span>, a aplicação desenvolvida se encontra no portfólio <span>(acervo de obras intelectuais)</span></p>
                                </div>
                        </div>
                    </div>
                </div>                  
        </div>
    )
}
export default Sobre