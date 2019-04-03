import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import Sidebar from './Sidebar';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1" stye={{ margin: '0 10px', padding: '0 10px' }}>
            <Link to={'/surveys'}>Dashboard</Link>
          </li>,
          <li key="2" style={{ margin: '0 10px', padding: '0 10px' }}>
            <Payments />
          </li>,

          <li key="3" style={{ margin: '0 10px', padding: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="4">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div className="navbar-fixed" style={{ zIndex: '9999' }}>
        <nav className="grey darken-4 z-depth-3">
          <div className="container">
            <div className="nav-wrapper">
              <Sidebar />
              <Link to={'/'} className="brand-logo">
                FIDO
              </Link>
              <ul className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
