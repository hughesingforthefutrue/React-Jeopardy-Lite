import React from "react";

function Welcome(props) {
  return <div className="Welcome">welcome,{props.match.params.name}</div>;
}

export default Welcome;
