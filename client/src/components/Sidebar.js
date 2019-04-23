import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
// import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import logo from './resources/logo.png';

import 'materialize-css/dist/css/materialize.min.css';

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
      draggable: true
    });
  }

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
          <li key="1" className="sidenav-close">
            <Link to={'/surveys'}>Dashboard</Link>
          </li>,
          <li key="2" className="sidenav-close container">
            <Payments />
          </li>,
          <li key="3" className="sidenav-close black-text container">
            Credits: {this.props.auth.credits}
          </li>,
          <li key="5">
            <div className="divider" />
          </li>,
          <li key="6">
            <a href="#" className="subheader">
              Account Controls
            </a>
          </li>,
          <li key="4">
            <a href="/api/logout" className="sidenav-close">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view center">
              <div className="background ">
                <div
                  style={{ height: '100%', width: '100%' }}
                  className="grey darken-4"
                  valign-wrapper
                />
              </div>
              <Link to={'/'} className="sidenav-close">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </li>
          <div className="center">{this.renderContent()}</div>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Sidebar);
