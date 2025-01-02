import { React, useState } from "react";
import Points from "./Points";
import Reason from "./Reason";
import TotalCal from "./TotalCal";


function Pros() {
    const [childData, setChildData] = useState("");

    const handleDataFromChild = (data) => {
      setChildData(data);
    };
  return (
    <>
      <div className="container ProsCol">
        <div className="row">
          <div className="col-md-10">
            <Reason />
            <strong>{childData}</strong>
          </div>
          <div className="col-md-2">
            <Points  sendDataToParent={handleDataFromChild} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Pros;
