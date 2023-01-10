import React from "react";

function Spinner(props) {
  return (
    <div>
      <div
        className="spinner-border"
        style={{"width": "3rem", "height": "3rem"}}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
