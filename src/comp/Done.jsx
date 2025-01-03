import React from "react";
import Pros from "./Pros.jsx";
import Cons from "./Cons.jsx";

function Done() {
  const pros = {
    marginLeft: 0,
    paddingLeft: 0,
  };
  return (
    <>
      <center>
        {" "}
        <h1 className="pros">Pros</h1>
      </center>
      <Pros style={pros} />

      <center>
        <h1 className="Cons">Cons</h1>
        <Cons />
      </center>
    </>
  );
}
export default Done;
