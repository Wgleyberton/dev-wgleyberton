import React from "react"
import python from "../img/python-logo.png"
import typescript from "../img/typescript-logo.png"
import next from "../img/next-logo.png"
import node from "../img/node-logo.png"
import mongodb from "../img/mongodb-logo.png"
import './CardSkills.css'

const Studying = ()=> {
    return(
        <div className="container-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="python-logo" src={python}/>
                    </div>
                    <div className="back-card">
                        <h2>Básico</h2>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="typescript-logo" src={typescript}/>
                    </div>
                    <div className="back-card">
                        <h2>Básico</h2>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="next-logo" src={next}/>
                    </div>
                    <div className="back-card">
                        <h2>Básico</h2>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="node-logo" src={node}/>
                    </div>
                    <div className="back-card">
                        <h2>Intermediário</h2>
                    </div>
                </div>
            </div>
            
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="mongodb-logo" src={mongodb}/>
                    </div>
                    <div className="back-card">
                        <h2>Intermediário</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Studying