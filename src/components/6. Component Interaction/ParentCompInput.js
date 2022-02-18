//Program to show typed content of parent comonent in Child and vise verasa
import React, { useState } from "react";
import ChildCompInput from "./ChildCompInput";
let ParentCompInput=()=>
{
    let [parentData,setparentData]=useState("")
    let [childData,setchildData]=useState("")
    let update=(event)=>
    {
        setparentData(parentData= event.target.value)
    }
    let getData=(value)=>
    {
        setchildData(value)
    }

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-grey" >
                        <h1>Parent</h1>
                    </div>
                    <div className="card-body">
                    <input type="text" className="form-control" onChange={update}></input>
                    <br/>
                    <p>{childData}</p>
                    <ChildCompInput val={parentData} get={getData}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ParentCompInput


// import React from "react";
// import ChildCompInput from "./ChildCompInput";

// class ParentCompInput extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             parentData:'',
//             childData:''

//         }
//     }
//     update=(event)=>
//     {
//         this.setState(
//             {
               
//                 parentData: event.target.value
//             }
//         )
//     }
//     getData=(value)=>
//     {
//         this.setState(
//             {
//                 childData: value
//             }
//         )
//     }

//     render()
//     {
//         return(
//             <React.Fragment>
//                 <div className="container mt-3">
//                     <div className="card">
//                         <div className="card-header bg-grey" >
//                             <h1>Parent</h1>
//                         </div>
//                         <div className="card-body">
//                         <input type="text" className="form-control" onChange={this.update}></input>
//                         <br/>
//                         <p>{this.state.childData}</p>
//                         <ChildCompInput val={this.state.parentData} get={this.getData}/>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// export default ParentCompInput