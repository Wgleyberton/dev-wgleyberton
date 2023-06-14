import React, { useEffect } from "react"
import "./Portfolio.css"
import VanillaTilt from "vanilla-tilt"



const Portfolio = () => {

    const vanilla = VanillaTilt.init(document.querySelectorAll(".card"), {
        max:25,
        speed:400,
        glare:true,
        "max-glare": 1
    
    })
    useEffect((vanilla) => {
        vanilla = VanillaTilt.init(document.querySelectorAll(".card"), {
            max:25,
            speed:400,
            glare:true,
            "max-glare": 1
        
        })
    },[vanilla])

    const barbershop = {
        href: "https://wgleyberton.github.io/barbershop/",
        target: "_blank",
        rel: "noreferrer",
    };
    const marcador = {
       href: "https://wgleyberton.github.io/marcador-de-pontos/",
       target: "_blank",
       rel: "noreferrer",
    };
    const todolist = {
        href: "https://wgleyberton.github.io/todolist/",
        target: "_blank",
        rel: "noreferrer",
     };
     const acervo = {
        href: "https://acervoobrasintelectuais.confea.org.br/",
        target: "_blank",
        rel: "noreferrer",
     };

    return(
        <div className="portfolio" id="portfolio" >
            <h2>Portfólio</h2>
                <div className="container-portfolio">
                    <div className="card" id="barbershop">
                        <div className="content"  >
                        <a {...barbershop}><h3>Barbershop</h3></a>
                            <p>
                            Esse é um projeto de uma landing page de uma barbearia fictícia. O objetivo desse projeto é demonstrar habilidades de desenvolvimento front-end com HTML, CSS e JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="card" id="todolist" >
                        <div className="content"  >
                        <a {...todolist} ><h3>Todolist</h3></a>
                            <p>
                            TodoList  é uma de lista de tarefas construído em Html, CSS e JavaScript. Ele permite ao usuário adicionar, remover e marcar tarefas como concluídas em uma lista.
                            </p>
                        </div>
                    </div>
                    <div className="card" id="marcador">
                            <div className="content" >
                            <a {...marcador} ><h3>Marcadador de pontos</h3></a>
                            <p>
                            Este projeto é um marcador de pontos para competições e disputas de jiu-jitsu, desenvolvido em React para fixação do uso de useState.
                            </p>  
                        </div>
                    </div>
                    <div className="card"  id="acervo">
                        <div className="content">
                        <a {...acervo}><h3>Acervo de Obras Intelectuais</h3></a>
                            <p>
                            Sistema de consulta de obras intelectuais. Construído em ASP.NET MVC, C# e JavaScript.
                            </p> 
                        </div>
                    </div>
                </div>
        </div>      
    )
}
export default Portfolio