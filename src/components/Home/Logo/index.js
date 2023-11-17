import './index.scss'
import Photo from '../../../assets/images/lina.jpeg'

const Logo = () => {
   
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