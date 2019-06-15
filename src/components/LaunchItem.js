import React from "react";
import { Link } from "react-router-dom";
//descructuring instead of just getting props
export default function LaunchItem({
  launch: {
    flight_number, //same as props.launch.flight_number
    mission_name,
    launch_date_local,
    launch_success
  }
}) {
  return (
    <div
      className="card text-grey bg-light  mb-3"
      style={{ maxWidth: "80%", margin: "auto" }}
    >
      <div className="card-header">
        <h4 className="card-title">
          Mission:{" "}
          <span
            style={{
              color: launch_success ? "#56CC9D" : "#FF7851",
              fontSize: "1.4rem"
            }}
          >
            {mission_name}
          </span>
        </h4>
      </div>
      <div className="card-body">
        <p className="card-text">{launch_date_local}</p>
        {/* grab the flight_number in launch for the query */}
        <Link to={`/Launch/${flight_number}`}>
          <button type="button" className="btn btn-info">
            Launch Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
