import React from 'react';
import './footer.css';

const Landing = () => {
  return (
    <footer class="page-footer grey darken-4">
      <div class="container">
        <div class="row">
          <div class=" links col l4 s6">
            <b>
              <p>Company</p>
            </b>
            <ul>
              <li>
                <a class="grey-text " href="#!">
                  About Us
                </a>
              </li>
              <li>
                <a class="grey-text " href="#!">
                  Why Us
                </a>
              </li>
              <li>
                <a class="grey-text " href="#!">
                  Customers
                </a>
              </li>
            </ul>
          </div>
          <div class="links col l4 s6">
            <b>
              <p>Service</p>
            </b>
            <ul>
              <li>
                <a class="grey-text" href="#!">
                  Features
                </a>
              </li>
              <li>
                <a class="grey-text " href="#!">
                  Plans and Pricing
                </a>
              </li>
              <li>
                <a class="grey-text " href="#!">
                  Try Us
                </a>
              </li>
              <li>
                <a class="grey-text " href="#!">
                  Create an Account
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-social-icons col l4 s12 center">
            <h4 class="_14">Follow us on</h4>
            <ul class="social-icons">
              <li>
                <a href="https://www.facebook.com" class="social-icon">
                  {' '}
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" class="social-icon">
                  {' '}
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" class="social-icon">
                  {' '}
                  <i class="fa fa-youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" class="social-icon">
                  {' '}
                  <i class="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.google.com" class="social-icon">
                  {' '}
                  <i class="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider grey darken-4" />
      <div class="footer-copyright" style={{ paddingBottom: '20px' }}>
        <div class="container">
          FIDO ©<span>{new Date().getFullYear()}</span>
          <span className="right">
            Create and maintained by{' '}
            <a href="https://github.com/shayannasir" className="teal-text">
              Shayan Nasir
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Landing;
