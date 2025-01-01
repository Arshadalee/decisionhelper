import React from 'react';
import TotalCal from './TotalCal';

const upmargin={
    marginTop:"5px",    
    width:"350px",
    height:"33px"
}
const rea={
    marginTop:0, 
    width:"350px",
    height:"33px",
    paddingTop:"0",
}
function Reason (){
    return<>
        <h5><input type='text' placeholder="Enter your statment1" style={upmargin}/></h5>
        <h5><input type='text' placeholder="Enter your statment2" style={rea} /></h5>
        <h5><input type='text' placeholder="Enter your statment3" style={rea}/></h5>
        <h5><input type='text' placeholder="Enter your statment4" style={rea} /></h5>
        <h5><input type='text' placeholder="Enter your statment5" style={rea}/></h5>
        
       <TotalCal/>

    </>
}
export default Reason;