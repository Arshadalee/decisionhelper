import React from 'react'
import Cons from '../Cons';
import Points from '../Points';
import Pros from '../Pros';
import Reason from '../Reason';

const points = {
    marginRight: 0,
  };
const OptionTwo = () => {
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

export default OptionTwo
