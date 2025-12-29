import React from "react"
import csharp from "../img/csharp-logo.png"
import java from "../img/java-logo.png"
import postgres from "../img/postgres-logo.png"
import mysql from "../img/mysql-logo.png"
import python from "../img/python-logo.png"
import './CardSkills.css'

const OtherSkills = () => {
    return (
        <div className="container-card">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="java-logo" src={java} />
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="csharp-logo" src={csharp} />
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="python-logo" src={python} />
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="postgres-logo" src={postgres} />
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="react-logo" src={mysql} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OtherSkills





