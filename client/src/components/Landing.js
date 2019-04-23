import React, { Component } from 'react';
import logo from './resources/logo-big-grey.png';
import './resources/line-break.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <section className="center">
          <h3 className="grey-text text-darken-3">Welcome To</h3>
          <div>
            <img
              src={logo}
              alt="logo"
              className="responsive-img"
              style={{ margin: '30px auto' }}
            />
          </div>
          <a
            href="/auth/google"
            className="btn btn-large grey darken-4 teal-text text-lighten-1 z-depth-4"
            style={{ marginTop: '50px' }}
          >
            Try Us
          </a>
        </section>
        <hr className="style-two" />
        <section id="features">
          <div className="row">
            <h3 className="center grey-text text-darken-3">
              What can FIDO do ?
            </h3>
            <br />
            <div className="col s12 m12">
              <div className="carousel feature-slider">
                <div className="card-panel center z-depth-4 carousel-item">
                  <i className="fa fa-envelope fa-5x teal-text text-darken-2" />
                  <h4>Create Campaigns</h4>
                  <p>Spread the word with easily customised Email Templates.</p>
                </div>

                <div className="card-panel center z-depth-4 carousel-item">
                  <i className="fa fa-comment fa-5x teal-text text-darken-2" />
                  <h4>Get Feedback</h4>
                  <p>
                    Send tailored Feedback mails to all your customers and know
                    how they feel.
                  </p>
                </div>

                <div className="card-panel center z-depth-4 carousel-item">
                  <i className="material-icons large teal-text text-darken-2 ">
                    pie_chart
                  </i>
                  <h4>Visualizations</h4>
                  <p>
                    See how people/clients have responded to your
                    Feedback/Campaign using charts and graphs.
                  </p>
                </div>

                <div className="card-panel center z-depth-4 carousel-item">
                  <i
                    className="fa fa-rupee fa-5x teal-text text-darken-2"
                    style={{ marginTop: '10px' }}
                  />
                  <h4>Cheapest Prices</h4>
                  <p>
                    Avail all the services FIDO has to offer at surprisingly low
                    cost without imrpovising it's security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="style-two" />
        <section id="pricing">
          <div>
            <h3 className="center grey-text text-darken-3">
              A Single Plan and Price for Everyone
            </h3>
            <table
              className="centered highlight"
              style={{ margin: '60px 10px 0px 10px', maxWidth: '800px' }}
            >
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Availability</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>User</td>
                  <td>Unlimited*</td>
                </tr>
                <tr>
                  <td>Emails per Month</td>
                  <td>Unlimited**</td>
                </tr>
                <tr>
                  <td>24*7 Support</td>
                  <td>
                    <i className="material-icons teal-text">check</i>
                  </td>
                </tr>
                <tr>
                  <td>Campaigns</td>
                  <td>
                    <i className="material-icons teal-text">check</i>
                  </td>
                </tr>
                <tr>
                  <td>Feedbacks</td>
                  <td>
                    <i className="material-icons teal-text">check</i>
                  </td>
                </tr>
                <tr>
                  <td>Feedback Analysis</td>
                  <td>
                    <i className="material-icons teal-text">check</i>
                  </td>
                </tr>
                <tr>
                  <td>Visualizations</td>
                  <td>
                    <i className="material-icons teal-text">check</i>
                  </td>
                </tr>
                <tr>
                  <td>Custom Email Design</td>
                  <td>
                    <i className="material-icons teal-text">check</i>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="right red-text text-darken-4">...and so many more.</p>
            <br />
            <br />

            <div>
              <div className="row">
                <div className="col s12 m6">
                  <h3>Credit System</h3>
                  <blockquote>
                    <i>
                      {' '}
                      <p className="flow-text">
                        To make our service more affordable, flexible and
                        secure, we came up with a credit based system.
                      </p>
                    </i>
                  </blockquote>
                </div>
                <div className="col s12 m6">
                  <ul
                    className="collection with-header z-depth-2 grey-text text-darken-3"
                    style={{ paddingBottom: '10px' }}
                  >
                    <li className="collection-header">
                      <h4>How it works</h4>
                    </li>
                    <li className="collection-item">
                      <span
                        style={{ fontWeight: 'bold' }}
                        className="grey-text text-darken-4"
                      >
                        Step 1:
                      </span>{' '}
                      Buy Credits with Money.
                    </li>
                    <li className="collection-item">
                      <span
                        style={{ fontWeight: 'bold' }}
                        className="grey-text text-darken-4"
                      >
                        Step 2:
                      </span>{' '}
                      Send Surveys using Credits.
                    </li>
                    <li className="collection-item">
                      <span
                        style={{ fontWeight: 'bold' }}
                        className="grey-text text-darken-4"
                      >
                        Step 3:
                      </span>{' '}
                      Done !
                    </li>
                  </ul>
                </div>
              </div>
              <p className="flow-text">
                Now, the coolest thing:{' '}
                <span className="teal-text text-darken-2">
                  One Credit costs Rs. 50 only,
                </span>{' '}
                and{' '}
                <span className="teal-text text-darken-2">
                  One Survey cost just one Credit.
                </span>
              </p>
            </div>
          </div>
        </section>
        <hr className="style-two" />
        <section className="center" id="testimonials">
          <h3 className="grey-text text-darken-3">You're in good hands</h3>
          <div className="row center">
            <div className="col s12 m10 offset-m1">
              <div
                className="carousel carousel-slider center teal-text text-darken-4"
                id="carouselFirst"
              >
                <div className="carousel-item" href="#one!">
                  <h2>Testimonial 1</h2>
                  <p className="flow-text">
                    "FIDO is an excellent solution for realising how the client
                    feels. It did exactly what it describes."
                    <p>
                      <em>&mdash; Salman Nasir from Edge Architects</em>
                    </p>
                  </p>
                </div>

                <div className="carousel-item" href="#two!">
                  <h2>Testimonial 2</h2>
                  <p className="flow-text">
                    "I was worried it might be complicated but it's so flexible
                    and easy to use. Definitely recommend it to all growing
                    startups."
                    <p>
                      <em>&mdash; Gousul Jamal from Badah Enterprises</em>
                    </p>
                  </p>
                </div>

                <div className="carousel-item" href="#three!">
                  <h2>Testimonial 3</h2>
                  <p className="flow-text">
                    "The Pie Charts make it so easy to read the responses. Will
                    be sending more Surveys very soon."
                    <p>
                      <em>&mdash; Areeb Shami from Linkage Marketing</em>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
