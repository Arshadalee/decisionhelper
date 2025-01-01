import {React,useState} from 'react';
import TotalCal from './TotalCal';





const dist1={
    color:"green",
    paddingBottom:"2px",
    width:"70px",
    marginTop:"5px",
    height:"33px"
}
const dist={
    color:"green",
    paddingBottom:"7px",
    width:"70px",
    marginTop:"8px",
    height:"33px",
    marginRight:0,

}
function Points(){
    const[point1,setPoint1]=useState();
    const[point2,setPoint2]=useState();
    const[point3,setPoint3]=useState();
    const[point5,setPoint5]=useState();
    const[point4,setPoint4]=useState();
    
    const[total,setTotal]=useState([]);

    function TotalPointsDone(){
        setTotal(point1+point2+point3+point4+point5);
        
        return total;
    };

    
    
    return<>

    <input placeholder='Rating' type='number' value={point1} onChange={(e)=>setPoint1(+e.target.value)} style={dist1}/>
    <input placeholder='Rating' type='number' value={point2} onChange={(e)=>setPoint2(+e.target.value)}style={dist}/>
    <input placeholder='Rating' type='number' value={point3} onChange={(e)=>setPoint3(+e.target.value)}style={dist}/>
    <input placeholder='Rating' type='number' value={point4} onChange={(e)=>setPoint4(+e.target.value)}style={dist}/>
    <input placeholder='Rating' type='number' value={point5} onChange={(e)=>setPoint5(+e.target.value)}style={dist}/>



<button type='number' onClick={TotalPointsDone} >
    Calculate Ratings
</button>

<TotalCal tdata={total}/>

    </>
    }

    export default Points;
