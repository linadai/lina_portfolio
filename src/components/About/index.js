import { faAws, faCss3, faGitAlt, faHtml5, faJs, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const About = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])



    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                As a junior full-stack developer, I specialize in crafting web front-end components and back-end applications with a focus on clean, maintainable, and reusable code.
          </p>
          <p align="LEFT">
          I'm passionate about collaboration and thrive on continuous learning and knowledge sharing.
          </p>
          <p>
          I'm a family-oriented individual, a loving mother of three, a gardening enthusiast, and an unabashed tech lover!
          </p>

            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#DD00311"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJsSquare} color="#DD00311"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color="#DD00311"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#DD00311"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faNodeJs} color="#DD00311"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faAws} color="#DD00311"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-spin-fade-loader'/>
        </>
        
    )
};

export default About;