import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 540, clear: "both", paddingTop: 40, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
