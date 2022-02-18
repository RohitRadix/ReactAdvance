import React, { useState }  from "react";

let ClickCount= ()=>
{
   let[count,setCount]= useState(0)
   let update=()=>
   {
       setCount (count+1);
   }
    return(
        <React.Fragment>
            <div className='App'>
                        <h1 >Click counter</h1>
                        
                         <h3>{count}</h3>
                       <button onClick={update}>Click me</button>
                      </div>
                          
        </React.Fragment>
        
                )
        
    
}
export default ClickCount