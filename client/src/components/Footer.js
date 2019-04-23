import React from 'react';
import './resources/footer.css';
import sg_logo_w from './resources/goat_w.png';

const Landing = () => {
  return (
    <footer class="page-footer grey darken-4">
      <div class="container">
        <h6 className="center cyan-text" style={{ marginBottom: '40px' }}>
          Having second thoughts ?{' '}
          <a
            href="mailto:fido@scrapegoat.tech?subject=FIDO%20Survey%20not%20found%20issue&"
            className="red-text text-darken-1"
            style={{ fontSize: '1.2em' }}
          >
            Mail
          </a>{' '}
          us after you log in and we'll help you try FIDO for free !
        </h6>
        <div class="row">
          <div class=" links col l4 s6">
            <b>
              <p>Company</p>
            </b>
            <ul>
              <li>
                <a class="grey-text " href="#features">
                  About Us
                </a>
              </li>
              <li>
                <a class="grey-text " href="#features">
                  Why Us
                </a>
              </li>
              <li>
                <a class="grey-text " href="#testimonials">
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
                <a class="grey-text" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a class="grey-text " href="#pricing">
                  Plans and Pricing
                </a>
              </li>
              <li>
                <a class="grey-text " href="/auth/google">
                  Try Us
                </a>
              </li>
              <li>
                <a class="grey-text " href="/auth/google">
                  Create an Account
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-social-icons col l4 s12 center">
            <h4 class="_14">Follow us on</h4>
            <ul class="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/shayanevil"
                  class="social-icon"
                >
                  {' '}
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shayannasir" class="social-icon">
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
                <a
                  href="https://www.linkedin.com/in/syedshayannasir/"
                  class="social-icon"
                >
                  {' '}
                  <i class="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:fido@scrapegoat.tech?subject=FIDO%20Survey%20not%20found%20issue&"
                  class="social-icon"
                >
                  {' '}
                  <i class="fa fa-google-plus" />
                </a>
              </li>
            </ul>
            <p>
              Or, simply{' '}
              <a href="mailto:fido@scrapegoat.tech?subject=FIDO%20Survey%20not%20found%20issue&">
                mail
              </a>{' '}
              us at{' '}
              <span className="teal-text text-darken-1">
                {' '}
                fido@scrapegoat.tech
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="divider grey darken-4" />
      <div class="footer-copyright" style={{ paddingBottom: '20px' }}>
        <div class="container">
          <div className="left">
            {' '}
            FIDO ©<span>{new Date().getFullYear()}</span>
          </div>
          <a href="https://www.scrapegoat.tech/" id="sg">
            <img src={sg_logo_w} alt="scrapegoat" className="center" />
          </a>
          <span className="right">
            Created by{' '}
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
