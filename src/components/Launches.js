import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import Indicator from "./Indicator";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default class Launches extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 style={{ color: "#1e999e", fontSize: "2rem" }}>
            Launch Information
          </h1>
          <p className="lead">This is SpaceX launch information panel</p>
          <Indicator />
          <hr className="my-4" />
          <Query query={LAUNCHES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              return (
                <Fragment>
                  {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))}
                </Fragment>
              );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}
