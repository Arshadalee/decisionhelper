import {React} from 'react';
import Points from './Points';
import Reason from './Reason';
import TotalCal from './TotalCal';

const points={
    marginRight: 0,
}
function Pros(){

    

    return <>
<div className="container ProsCol">
<div className="row">
    
    <div className="col-md-10">
    <Reason/>
    </div>
    <div className="col-md-2"><Points style={points}/></div>
   
</div>
</div>
    </>
}
export default Pros;