import React, { useMemo, useRef, useState } from "react";
import Pros from "./Pros.jsx";
import Cons from "./Cons.jsx";

function Done({ setTrigger, trigger }) {
  const [segmentResult, setSegmentResult] = useState({prosAddition:0,consAddition:0})
  const result = useMemo(
    () =>{
      const result =segmentResult?.prosAddition +
      segmentResult?.consAddition
    return result;
    },
    [segmentResult,trigger]
  );

  const pros = {
    marginLeft: 0,
    paddingLeft: 0,
  };
  console.log(segmentResult);

  return (
    <>
      <center>
        {" "}
        <h1 className="pros">Pros</h1>
      </center>
      <Pros
        style={pros}
        segmentResult={segmentResult}
        finalResult={result}
        setTrigger={setTrigger}
        setSegmentResult={setSegmentResult}
      />

      <center>
        <h1 className="Cons">Cons</h1>
        <Cons segmentResult={segmentResult} setSegmentResult={setSegmentResult} setTrigger={setTrigger} />
      </center>
      <h1>{result}</h1>
    </>
  );
}
export default Done;
