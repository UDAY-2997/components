import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    const { title } = this.props;
    return (
      <footer>
        <div className='container flexbox'>
          <div className='foot-head'>
            <h2>{title}</h2>
          </div>
          <div>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
