import './index.scss'
import LogoTitle from '../../assets/images/logo-l.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['i', 'n', 'a'];
    const jobArray = ['F', 'u', 'l', 'l', 's', 't', 'a', 'k', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Frontend Developer / Backend Developer / React Developer </h2>
                    <Link to="/lina_portfolio/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
           <Loader type='ball-spin-fade-loader'/>
        </>
    )
}

export default Home