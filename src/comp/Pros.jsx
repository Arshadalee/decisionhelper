import { React, useEffect, useState } from "react";
import Points from "./Points";
import Reason from "./Reason";
import TotalCal from "./TotalCal";


function Pros({segmentResult, setTrigger, setSegmentResult}) {
    const [addition, setAddition] = useState(0);
  useEffect(()=>{
    setSegmentResult({ ...segmentResult,prosAddition: addition})
  },[addition])

  return (
    <>
      <div className="container ProsCol">
        <div className="row">
          <div className="col-md-10">
            <Reason />
            <strong>{addition}</strong>
          </div>
          <div className="col-md-2">
            <Points  prosAddition={setAddition} setTrigger={setTrigger}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pros;
