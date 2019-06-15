import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    console.log(flight_number);
    return (
      <div>
        <hr />
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;

            return (
              <Fragment>
                <Fragment>
                  <h3 style={{ color: "#1e999e" }}>Mission : {mission_name}</h3>
                </Fragment>
                <Fragment>
                  <div
                    className="card text-grey bg-light mb-3"
                    style={{ maxWidth: "80%", margin: "auto" }}
                  >
                    <div className="card-header">
                      <h4 className="card-title" style={{ color: "#1496ed" }}>
                        Mission Detail
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Flight Number: {flight_number}
                          </li>
                          <li className="list-group-item">
                            Launch Year: {launch_year}
                          </li>
                          <li className="list-group-item">
                            Launch Success:{" "}
                            <span
                              style={{
                                color: launch_success ? "#56CC9D" : "#FF7851"
                              }}
                            >
                              {launch_success ? "YES" : "NO"}
                            </span>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <div
                    className="card text-grey bg-light mb-3"
                    style={{ maxWidth: "80%", margin: "auto" }}
                  >
                    <div className="card-header">
                      <h4 className="card-title" style={{ color: "#1496ed" }}>
                        Rocket Detail
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Rocket ID: {rocket_id}
                          </li>
                          <li className="list-group-item">
                            Rocket Name: {rocket_name}
                          </li>
                          <li className="list-group-item">
                            Launch Success: {rocket_type}
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Fragment>
              </Fragment>
            );
          }}
        </Query>

        <Link to={`/`}>
          <button type="button" className="btn btn-info">
            Go Back
          </button>
        </Link>
      </div>
    );
  }
}
