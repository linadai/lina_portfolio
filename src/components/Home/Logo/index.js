import './index.scss'
import Photo from '../../../assets/images/lina.jpeg'
import { useRef } from 'react'
const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
        <div className="logo-container">
            <img className='photo' src={Photo} alt="" />
           <div className="header-background">
            <div className="header-background-box"></div>
           </div>
        </div>
    )
}

export default Logo;