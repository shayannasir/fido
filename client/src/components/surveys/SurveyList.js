import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import PieChart from 'react-minimal-pie-chart';

var data = [];

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  showPieChart({ yes, no }) {
    return (data = [
      { title: 'Yes', value: yes, color: '#E38627' },
      { title: 'No', value: no, color: '#C13C37' }
    ]);
  }

  renderSurveys() {
    if (this.props.surveys.length > 0) {
      return this.props.surveys.reverse().map(survey => {
        return (
          <div
            className="card z-depth-3"
            style={{ margin: '25px 0' }}
            key={survey._id}
          >
            <div className="card-image activator waves-effect waves-block waves-light">
              <PieChart
                className="activator"
                data={this.showPieChart(survey)}
                style={{ height: '200px', padding: '10px 0' }}
                label
                labelStyle={{
                  fontSize: '8px',
                  fontFamily: 'sans-serif'
                }}
                radius={42}
                labelPosition={112}
                animate={true}
              />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                <span className="grey-text text-darken-1">Title</span>:&nbsp;
                <span className="teal-text text-darken-2">{survey.title}</span>
                <i className="material-icons right teal-text">arrow_upward</i>
              </span>
              <span className="orange-text text-darken-3">
                {' '}
                Yes: {survey.yes} &nbsp;
              </span>
              <span className="deep-orange-text text-darken-4">
                {' '}
                No: {survey.no}
              </span>
              <p className="right grey-text" style={{ fontSize: '0.9em' }}>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title orange-text text-darken-3">
                {survey.title}
                <i className="material-icons teal-text right">close</i>
              </span>
              <p className="deep-orange-text text-darken-4">{survey.body}</p>
              <br />

              <br />
              <p className="left">
                <span className="orange-text text-darken-3">
                  {' '}
                  Yes: {survey.yes} &nbsp;
                </span>
                <span className="deep-orange-text text-darken-4">
                  {' '}
                  No: {survey.no}
                </span>
              </p>
              <p className="right grey-text " style={{ fontSize: '0.9em' }}>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <h6 className="flow-text">
          Just give us a moment, while our minions fetch your data from our
          servers.{' '}
        </h6>
        <br />
        <p style={{ fontSize: '1.3em' }} className="red-text text-darken-3">
          Sorry, you havn't sent any Surveys yet. Click the '+' icons to send
          one now.
        </p>
        <br />
        <div className="grey-text text-darken-2">
          <p>
            Can't find your Surveys ? Not a problem. Follow the steps below and
            you're good to go !
          </p>
          <ol>
            <li>
              Give your Page a refresh ( with your fingers crossed preferrably
              ).
            </li>
            <li>Double check if you've logged in using the correct account.</li>
            <li>
              Are you certain you clicked on 'Send Survey' while filling up the
              Survey Form ?
            </li>
          </ol>
          <p>
            If nothing works out, you can always drop us a{' '}
            <a href="mailto:sshayann7@gmail.com?subject=FIDO%20Survey%20not%20found%20issue&">
              mail
            </a>{' '}
            and we'll get back to you in no time.
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <h4>List of Surveys:</h4>
        <div className="divider" />
        <div />
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);

// <div className="card darken-1" key="{survey._id">
//           <div className="card-content ">
//             <span className="card-title">{survey.title}</span>
//             <p>{survey.body}</p>
//             <p className="right">
//               Sent On: {new Date(survey.dateSent).toLocaleDateString()}
//             </p>
//           </div>
//           <div className="card-action">
//             <a href="#!">Yes: {survey.yes}</a>
//             <a href="#!">No: {survey.no}</a>
//           </div>
//         </div>
