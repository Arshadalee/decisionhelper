import { React, useState, useContext, createContext } from "react";
import TotalCal from "./TotalCal";

const dist1 = {
  color: "green",
  paddingBottom: "2px",
  width: "70px",
  marginTop: "5px",
  height: "33px",
};
const dist = {
  color: "green",
  paddingBottom: "7px",
  width: "70px",
  marginTop: "8px",
  height: "33px",
  marginRight: 0,
};
export const AppContext = createContext();
function Points({ prosAddition, consAddition,setTrigger }) {
  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);
  const [point3, setPoint3] = useState(0);
  const [point5, setPoint5] = useState(0);
  const [point4, setPoint4] = useState(0);

  const [total, setTotal] = useState(0);

  function TotalPointsDone() {
    const processAddition = prosAddition || consAddition
    setTotal(point1 + point2 + point3 + point4 + point5);
    setTrigger(curVal=>!curVal)
    processAddition(total);
  }
  return (
    <>
      {" "}
      <AppContext.Provider value={{ total, setTotal }}>
        <input
          placeholder="Rating"
          type="number"
          value={point1}
          onChange={(e) => setPoint1(+e.target.value)}
          style={dist1}
        />
        <input
          placeholder="Rating"
          type="number"
          value={point2}
          onChange={(e) => setPoint2(+e.target.value)}
          style={dist}
        />
        <input
          placeholder="Rating"
          type="number"
          value={point3}
          onChange={(e) => setPoint3(+e.target.value)}
          style={dist}
        />
        <input
          placeholder="Rating"
          type="number"
          value={point4}
          onChange={(e) => setPoint4(+e.target.value)}
          style={dist}
        />
        <input
          placeholder="Rating"
          type="number"
          value={point5}
          onChange={(e) => setPoint5(+e.target.value)}
          style={dist}
        />

        <button type="number" onClick={TotalPointsDone}>
          Calculate Ratings
        </button>

        <TotalCal tdata={total} />
      </AppContext.Provider>
    </>
  );
}

export default Points;
