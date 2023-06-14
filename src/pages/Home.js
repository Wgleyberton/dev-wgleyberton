import React from "react"
import { useEffect } from "react"
import "./Home.css"
import github from "../img/github-logo.png"
import linkedin from "../img/linkedin.png"
import VanillaTilt from "vanilla-tilt"

const Home = () => {

        const vanilla = VanillaTilt.init(document.querySelectorAll(".logo-sociais"), {
            max:25,
            speed:400,
            glare:true,
            "max-glare": 1
        
        })
        useEffect((vanilla) => {
            vanilla = VanillaTilt.init(document.querySelectorAll(".logo-sociais"), {
                max:25,
                speed:400,
                glare:true,
                "max-glare": 1
            
            })
        },[vanilla])
    
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


    return(
        <div className="home" id="home">
                <div className="container-home">
                    <h2>Bem vindo!</h2>
                    <h3>Me chamo <span>Wgleyberton</span> Alencar</h3>
                    <p>
                        Busco me tornar um <span>desenvolvedor</span>, aprimorando constantemente meus conhecimentos e habilidades, com o objetivo de contribuir da melhor maneira possível e adquirir mais experiência na área.
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