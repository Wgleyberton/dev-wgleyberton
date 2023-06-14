import React from "react"
import reactlogo from "../img/react-logo.png"
import javascript from "../img/javascript-logo.png"
import github from "../img/github-logo.png"
import css from "../img/css-3-logo.png"
import prata from "../img/prata.png"
import './CardSkills.css'


const MainSkills = ()=> {
    return(
            <div className="container-card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="react-logo" src={reactlogo}/>
                        </div>
                        <div className="back-card">
                            <h2>Intermediário</h2>
                            <img alt="medalha-de-prata" src={prata} />
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="javascript-logo" src={javascript}/>
                        </div>
                        <div className="back-card">
                            <h2>Intermediário</h2>
                            <img alt="medalha-de-prata" src={prata} />
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="github-logo" src={github}/>
                        </div>
                        <div className="back-card">
                            <h2>Intermediário</h2>
                            <img alt="medalha-de-prata" src={prata} />
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="css-logo" src={css}/>
                        </div>
                        <div className="back-card">
                            <h2>Intermediário</h2>
                            <img alt="medalha-de-prata" src={prata} />
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default MainSkills











                
            