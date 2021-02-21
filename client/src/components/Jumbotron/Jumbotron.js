import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 540, clear: "both", paddingTop: 40}}
      className="jumbotron border"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
