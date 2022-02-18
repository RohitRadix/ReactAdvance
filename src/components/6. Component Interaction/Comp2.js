import React, { useState } from "react";
import Comp from "./Comp";
let Comp2=(props)=>
{
    let[info1,setInfo1]=useState("This is the second component ")
    return(
        <React.Fragment>
            <h1>{info1}</h1>
            <h1>{props.msg}</h1>
        </React.Fragment>
    )
}
export default Comp2

//Old method using class based components
// import React from "react";
// import Comp from "./Comp";
// class Comp2 extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state=
//         {
//                 info1: 'This is the second component ',
               
//         }
//     }
//     render()
//     {
//         return(
//             <React.Fragment>
//                 <h1>{this.state.info1}</h1>
//                 <h1>{this.props.msg}</h1>


               
//             </React.Fragment>
//         )
    
//    }
// }
// export default Comp2