import React from 'react';
import "./Home.css";
import Done from "./Done.jsx";


const wstyle={
   
   TextDecoder:"none",
    backgroundColor:"green",
   width:"2000px",
   padding:"0"
   
}

function Home (){
return<>
    <center >
    <h1>Decision Helper</h1>
    <div className='container mainPage'style={wstyle}>
    <div className='row'>
    <div className='col-md-6 Dtwocol'>
    <center><h1 className='Dname'>Decision one</h1>
        </center><Done className="Done1"/>

        </div>
     <div className='col-md-6 Dtwocol'>
     <center> <h1 className='Dname'>Decision two</h1></center>
    </div>
    </div>
    </div></center>
    
</>
}
export default Home;