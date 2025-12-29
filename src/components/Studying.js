import React from "react"
import typescript from "../img/typescript-logo.png"
import next from "../img/next-logo.png"
import node from "../img/node-logo.png"
import go from "../img/go-logo.png"
import './CardSkills.css'

const Studying = ()=> {
    return(
        <div className="container-card">
           
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="typescript-logo" src={typescript}/>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="next-logo" src={next}/>
                    </div>
                </div>
            </div>

             <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="go-logo" src={go}/>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="front-card">
                        <img alt="node-logo" src={node}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Studying