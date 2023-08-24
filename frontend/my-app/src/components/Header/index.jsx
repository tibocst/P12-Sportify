import { Link, useLocation } from 'react-router-dom'
import '../../styles/Header.css'

const LOGO = require('../../assets/logo.png');

function Header() {

    return (
      <div className='header'>
        <div>
          <img className='header-logo' src={LOGO} alt="logo SportSee" />
        </div>
        <div>
          <nav className='header-nav'> 
            <Link to="/">Accueil</Link>
            <Link to="*">Profil</Link>
            <Link to="*">Réglage</Link>
            <Link to="*">Communauté</Link>
          </nav>
        </div>
      </div>
    )
  }
  
  export default Header