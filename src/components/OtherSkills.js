import React from "react"
import csharp from "../img/csharp-logo.png"
import java from "../img/java-logo.png"
import php from "../img/php-logo.png"
import mysql from "../img/mysql-logo.png"
import './CardSkills.css'

const OtherSkills = ()=> {
    return(
        <div className="container-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="csharp-logo" src={csharp}/>
                    </div>
                    <div className="back-card">
                        <h2>Básico</h2>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="java-logo" src={java}/>
                    </div>
                    <div className="back-card">
                        <h2>Básico</h2>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="php-logo" src={php}/>
                    </div>
                    <div className="back-card">
                        <h2>Básico</h2>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="react-logo" src={mysql}/>
                    </div>
                    <div className="back-card">
                        <h2>Intermediário</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OtherSkills





