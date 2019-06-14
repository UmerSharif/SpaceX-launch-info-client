import React from "react";
import "../App.css";

export default function Indicator() {
  return (
    <div className="my-3">
      <p className="space-between">
        <span className="bg-success" /> Success
        <span className="bg-danger fuck" /> Fail
      </p>
    </div>
  );
}
