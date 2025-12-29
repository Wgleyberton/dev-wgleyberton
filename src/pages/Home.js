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
                <h2>Bem vindo!</h2>
                <h3>Eu sou <span>Wgleyberton</span> Alencar</h3>
                <p>
                    Desenvolvedor <span>backend</span> com mais de 4 anos de experiência no desenvolvimento de sistemas, atuando fortemente com <span>PHP 8</span> e <span>Laravel</span> na construção de <span>APIs REST</span>, integrações, regras de negócio e bancos de dados relacionais, com ênfase em <span>PostgreSQL</span> e <span>SQL</span>.
                </p>
                <br/>
                <p>
                    Possuo sólida experiência no desenvolvimento e evolução de soluções <span>backend</span>, com foco em performance, escalabilidade, manutenibilidade e boas práticas de engenharia de software. Ao longo da minha trajetória profissional, atuei em diferentes contextos e projetos, o que me proporcionou vivência com <span>ASP.NET</span>, <span>C#</span>, <span>Entity Framework</span> e <span>JavaScript</span>, ampliando minha visão técnica e arquitetural.
                </p>
                <br/>
                <p>
                    Tenho formação acadêmica consistente em tecnologia, sendo <span>Bacharel em Sistemas de Informação</span>, com Pós-graduação em <span>Desenvolvimento Back End</span>, Pós-graduação em <span>Engenharia de Software com ênfase em Testes e Qualidade de Software</span> e <span>MBA em Gestão de Tecnologia da Informação</span>. Atualmente, curso Pós-graduação em <span>DevOps</span>, aprofundando conhecimentos em automação, processos e cultura DevOps.
                </p>
                <br/>
                <p>
                    Atuo em ambientes ágeis <span>(Scrum)</span>, com forte foco em qualidade, testes, versionamento e boas práticas. Mantenho aprendizado contínuo, estudando <span>Java</span> e <span>Go (Golang)</span> com foco no desenvolvimento de APIs escaláveis e de alta performance, buscando sempre gerar impacto e valor através do software.
                </p>

            </div>
            <div className="sociais">
                <a {...git}>
                    <img alt="github" className="logo-sociais" src={github} />
                </a>
                <a {...linkd}>
                    <img alt="linkedin" className="logo-sociais" src={linkedin} />
                </a>
            </div>
        </div>
    )
}
export default Home