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
                            <h2>Desenvolvedor Pleno</h2>
                            <h2>PHP 8 | Laravel | PostgreSQL</h2>
                            <p>
                                Desenvolvimento de <span>APIs REST</span> utilizando <span>PHP 8</span> e <span>Laravel,  </span>
                                administração e modelagem de banco de dados <span>PostgreSQL, </span>
                                integração de sistemas e manutenção de serviços <span>backend, </span>
                                implementação de regras de negócio e validações,
                                suporte técnico e melhorias contínuas em aplicações existentes.
                            </p>
                            <br />
                            <span><p>PlayMóvel Tecnologia <br />2023 / 2025</p></span>
                        </div>
                        <div className="experiencias-card">
                            <h2>Desenvolvedor Web</h2>
                            <h2>C# | ASP.NET | Bootstrap</h2>
                            <p>
                                Desenvolvimento de aplicações em ASP.NET e C#
                                Uso de Entity Framework e padrão MVC
                                Criação de interfaces com Bootstrap
                                Implementação de sistemas internos corporativos
                                Manutenção evolutiva de aplicações web
                            </p>
                            <br />
                            <span><p>Conselho Federal de Engenharia e Agronomia <br />2015 / 2016</p></span>
                        </div>
                        <div className="experiencias-card">
                            <h2>Desenvolvedor iOS</h2>
                            <h2>Swift | Objective C </h2>
                            <p>
                                Desenvolvimento de aplicativos mobile para a plataforma <span>iOS</span>, utilizando <span>Swift</span> e <span>Objective-C</span>, aplicando conceitos de arquitetura <span>Clean Swift</span>. Experiência prática com metodologia ágil <span>Scrum</span>, atuando em equipe multidisciplinar e colaborando em sprints, refinamentos e entregas contínuas.
                            </p>
                            <br />
                            <span><p>Wooba Soluções para Turismo <br /> 05/2016 / 09/2016 </p></span>
                        </div>
                        <div className="experiencias-card">
                            <h2>Desenvolvedor Mobile</h2>
                            <h2>Swift | Objective C </h2>
                            <p>
                                Desenvolvimento e implantação de aplicativos autorais para a plataforma iOS, com foco em aprendizado prático, arquitetura de aplicações e boas práticas de desenvolvimento mobile.
                            </p>
                            <br />
                            <span><p>Apple Developer Academy <br /> 2014 / 2015 </p></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sobre