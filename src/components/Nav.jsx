import { Link, useLocation } from 'react-router-dom';
import './../css/Nav.css'

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return <>
    <nav className={`nav ${isAboutPage? 'nav--bg' : ''}`}>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <Link to='/' className='nav__link'>Home</Link>
        </li>
        <li className='nav__list-item'>
          <Link to='/about' className='nav__link'>About</Link>
        </li>
      </ul>
    </nav>
  </>;
}

export default Navbar;