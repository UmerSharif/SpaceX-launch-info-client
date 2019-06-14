import React, { Component } from "react";
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
        <h3>Launch Detail</h3>
        <hr />
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <div
                className="card text-grey bg-light mb-3"
                style={{ maxWidth: "80%", margin: "auto" }}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Light card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
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
