import React from 'react';

import Points from './Points';
import Reason from './Reason';

function Cons(cdata){

    
    return <>
    <div className="container ProsCol">
    <div className="row">
        
        <div className="col-md-10">
        <Reason/>
        </div>
        <div className="col-md-2"><Points /></div>
     
    </div>
    </div>
        </>
}
export default Cons;