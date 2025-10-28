import logo from '../../../images/logo-mexico.jpeg';
import './Header.css';

function Header () {
    return (
        <header className="header">
            <img className='header_logo' src={logo} alt='Magical mexico'></img>
            <h1>México Mágico</h1>
        </header>
    );
}

export default Header;