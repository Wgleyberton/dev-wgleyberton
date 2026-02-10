import React from "react"
import { useEffect } from "react"
import "./Home.css"
import github from "../img/github-logo.png"
import linkedin from "../img/linkedin.png"
import VanillaTilt from "vanilla-tilt"

const Home = () => {

    const vanilla = VanillaTilt.init(document.querySelectorAll(".logo-sociais"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1

    })
    useEffect((vanilla) => {
        vanilla = VanillaTilt.init(document.querySelectorAll(".logo-sociais"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1

        })
    }, [vanilla])

    const git = {
        href: "https://github.com/Wgleyberton",
        target: "_blank",
        rel: "noreferrer",
    };
    const linkd = {
        href: "https://www.linkedin.com/in/wgleyberton/",
        target: "_blank",
        rel: "noreferrer",
    };


    return (
        <div className="home" id="home">
            <div className="container-home">
                <h3>Eu sou <span>Wgleyberton</span> Alencar</h3>
                <p>
                    Sou Desenvolvedor de Software, com sólida formação acadêmica e trajetória consistente no
                    desenvolvimento de soluções backend, web e mobile, atuando em ambientes corporativos e
                    projetos de médio e grande porte. Minha experiência é marcada pela criação de sistemas robustos,
                    escaláveis e bem estruturados, com forte foco em qualidade de código, desempenho e aderência às
                    boas práticas de engenharia de software, sempre alinhando tecnologia às necessidades do negócio.
                </p>
                <br/>
                <p>
                    Sou graduado em Sistemas de Informação, com MBA em Gestão de Tecnologia da Informação e
                    pós-graduações em Engenharia de Software (Qualidade e Testes) e Desenvolvimento Back End. Possuo perfil
                    analítico, organizado e orientado a resultados, com aprendizado contínuo e atualização constante
                    em novas tecnologias. Busco oportunidades como Desenvolvedor, onde eu possa agregar
                    valor técnico, colaborar com times de alta performance e evoluir profissionalmente em projetos
                    desafiadores.
                </p>

            </div>
            <div className="sociais">
                <a {...git}>
                    <img alt="github" className="logo-sociais" src={github} />
                </a>
                <br/>
                <a {...linkd}>
                    <img alt="linkedin" className="logo-sociais" src={linkedin} />
                </a>
            </div>
        </div>
    )
}
export default Home