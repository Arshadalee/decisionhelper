import React, { useMemo, useRef, useState } from 'react'
import Cons from '../Cons';
import Points from '../Points';
import Pros from '../Pros';
import Reason from '../Reason';

const points = {
    marginRight: 0,
  };
const OptionTwo = ({segment, setOptionTwoResult, setTrigger,trigger }) => {
  const [segmentResult, setSegmentResult] = useState({prosAddition:0,consAddition:0})
  const result = useMemo(() => segmentResult?.prosAddition + segmentResult?.consAddition,[segmentResult])
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
      <Pros style={pros} segmentResult={segmentResult} setSegmentResult={setSegmentResult}  setTrigger={setTrigger}/>

      <center>
        <h1 className="Cons">Cons</h1>
        <Cons segmentResult={segmentResult} setSegmentResult={setSegmentResult} setTrigger={setTrigger}/>

      </center>
      <h1>{result}</h1>
        </>
      );
  
}

export default OptionTwo
