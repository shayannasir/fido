import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import PieChart from 'react-minimal-pie-chart';

const data = [
  // { title: 'Yes', value: 10, color: '#E38627' },
  // { title: 'No', value: 15, color: '#C13C37' }
];

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  doStuff({ yes, no }) {
    data.push(
      {
        title: 'yes',
        value: yes,
        color: '#E38627'
      },
      {
        title: 'No',
        value: no,
        color: '#C13C37'
      }
    );
  }
  undoStuff() {
    data.length = 0;
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card teal" key={survey._id}>
          {this.doStuff(survey)}
          <div className="card-image activator waves-effect waves-block waves-light">
            <PieChart
              className="activator white"
              data={data}
              style={{ height: '200px', padding: '10px 0' }}
              label
              labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif'
              }}
              radius={42}
              labelPosition={112}
            />
            {/* {this.undoStuff()} */}
          </div>
          <div className="card-content">
            <span className="card-title activator white-text text-darken-4">
              {survey.title}
              <i className="material-icons right">arrow_upward</i>
            </span>
            <p className="white-text">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {survey.title}
              <i className="material-icons right">close</i>
            </span>
            <p>{survey.body}</p>
            <br />
            <br />
            Yes: {survey.yes} No: {survey.no}
          </div>
          {/* {this.undoStuff()} */}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>List of Surveys:</h3>
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
