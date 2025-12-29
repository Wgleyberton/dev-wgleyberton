import React from "react";
import { useEffect } from "react";
import "./Sobre.css"
import VanillaTilt from "vanilla-tilt"

const Sobre = () => {

    const vanilla = VanillaTilt.init(document.querySelectorAll(".experiencias-card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1

    })
    useEffect((vanilla) => {
        vanilla = VanillaTilt.init(document.querySelectorAll(".experiencias-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1

        })
    }, [vanilla])
    return (

        <div className="sobre" id="sobre">
            <div className="container-sobre">
                <div className="apresentacao">
                    <span><h2>Formação:</h2></span>
                    <p>
                        <p>Bacharelado em Sistemas de Informação - UniProjeção</p>
                        <br />
                    </p>
                    <span><h2>Pós Graduações:</h2></span>
                    <p>
                        <p>MBA em Gestão de Tecnologia da Informação - Anhanguera</p>
                        <br />
                        <p>Engenharia de Software com Ênfase em Testes e Qualidade de Software - Anhanguera</p>
                        <br />
                        <p>Desenvolvimento Backend - Anhanguera</p>
                        <br />
                        <p>Devops - Anhanguera (cursando)</p>
                    </p>
                </div>
                <div className="cursos">
                    <span><h2>Certificações:</h2></span>
                    <p>Scrum fundamentals certified - ScrumStudy.</p>

                    <span><h2>Cursos:</h2></span>
                    <p>Linguagem de Programação Java</p>
                    <p>FullStack Javascript - Node.js, React.js, Next.js</p>
                    <p>Developer.Net (Asp.net com C#.net).</p>
                    <p>Desenvolvimento de aplicativos para plataforma iOS.</p>
                    <p>Desenvolvimento Web Avançado com PHP, Laravel e VUE.js</p>

                </div>
                <div className="experiencias">
                    <h1>Experiências</h1>
                    <div className="cards-exp">
                        <div className="experiencias-card">
                            <h2>Desenvolvedor PHP 8 Laravel</h2>
                            <p>
                                Atuação como Desenvolvedor Back End Pleno, com foco no desenvolvimento e manutenção de APIs REST em <span>PHP 8</span> utilizando o framework <span>Laravel</span>.
                            </p>
                        </div>
                        <div className="experiencias-card">
                            <h2>Desenvolvedor iOS</h2>
                            <p>
                                Desenvolvimento e implantação de aplicativos mobile na plataforma <span>iOS </span>
                                utilizando linguagem de programação <span>SWIFT</span> e <span>objective C </span>, padrão de desenvolvimento
                                <span> CleanSwift</span> e metodologia <span>SCRUM</span>.
                            </p>
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
                                <span> MVC</span>, a aplicação desenvolvida se encontra no portfólio <span>(acervo de obras intelectuais)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sobre