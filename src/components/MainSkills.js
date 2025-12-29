import React from "react"
import reactlogo from "../img/react-logo.png"
import javascript from "../img/javascript-logo.png"
import git from "../img/git-logo.png"
import cicd from "../img/cicd-logo.png"
import php from "../img/php-logo.png"
import './CardSkills.css'


const MainSkills = ()=> {
    return(
            <div className="container-card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="php-logo" src={php}/>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="react-logo" src={reactlogo}/>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="javascript-logo" src={javascript}/>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="git-logo" src={git}/>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front-card">
                            <img alt="cicd-logo" src={cicd}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default MainSkills











                
            