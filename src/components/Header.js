import { Component } from 'react';
import logoImage from '../images/apple.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='container flexbox'>
          <div className='logo'>
            <a href='https://github.com/UDAY-2997' target='_blank'>
            <img src={logoImage} alt='Logo' />
            </a>
          </div>
          <ul>
            <li>About us</li>
            <li>Features</li>
            <li>Contact us</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
