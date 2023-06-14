import React from "react"
import "./Skills.css"

import MainSkills from "../components/MainSkills"
import OtherSkills from "../components/OtherSkills"
import Studying from "../components/Studying"


const Skills = () => {
    return(
        <div className="habilidades" id="habilidades">
            <div className="Skills">
                    <div className="container-skills">
                        <h2>Linguagens e ferramentas utilizadas com frequência</h2>
                        <div className="skills">
                            <MainSkills/>
                        </div>
                        <h2>Liguagens e ferramentas que já utilizei em projetos</h2>
                        <div className="skills">
                            <OtherSkills/>
                        </div>
                        <h2>Liguagens e ferramentas que estou estudando</h2>
                        <div className="skills">
                            <Studying/>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Skills