import React, { useState } from "react";

let DropdownSelect=()=>
{
    let [car, setCar]= useState("")
    let showcar=(event)=>
    {
        setCar(event.target.value)
    }
    return(
        <React.Fragment>
            <div className='container mt-4'>
                <div className='card col-8'>
                    <div className='card-header bg-black text-white'>
                        <h1>Select your car</h1>
                    </div>
                    <div className='card-body '>
                       <select onChange={showcar} className='form-control'>
                           <option disabled selected >Select a car</option>
                           <option>Audi</option>
                           <option>BMW</option>
                           <option>Mercedes</option>
                           <option>Volvo</option>
                           <option>Maruti Suzuki</option>
                           <option>Hyundai</option>
                       </select>
                       <h4>{car}</h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}
export default DropdownSelect



// import { Dropdown } from "bootstrap";
// import React from "react";
// class DropdownSelect extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={
//            car:''

//         }
//     }

//     showcar=(event)=>{
//         this.setState(
//             {
//                 car: event.target.value
//             }
//         )
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <div className='container mt-4'>
//                     <div className='card col-8'>
//                         <div className='card-header bg-black text-white'>
//                             <h1>Select your car</h1>
//                         </div>
//                         <div className='card-body '>
//                            <select onChange={this.showcar} className='form-control'>
//                                <option disabled selected >Select a car</option>
//                                <option>Audi</option>
//                                <option>BMW</option>
//                                <option>Mercedes</option>
//                                <option>Volvo</option>
//                                <option>Maruti Suzuki</option>
//                                <option>Hyundai</option>
//                            </select>
//                            <h4>{this.state.car}</h4>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }

// }
// export default DropdownSelect