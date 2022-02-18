import React, { useState } from "react";
let Sms=()=>
{
    let[remain,setReamin]= useState(100)
    let change=(e)=>
    {
        setReamin(remain= 100 - e.target.value.length)
    }
    return(
        <React.Fragment>
            <div className='container mt-4'>
                <div className='card col-7'>
                    <div className='card-heading bg-black text-white'>
                        <h1> Send SMS </h1>
                    </div>
                    <div className='card-body'>
                        <textarea type='text' maxLength="100"className='form-control' onChange={change} ></textarea>
                    </div>
                    <div className='card-footer'>
                        <p>Number of characters remaining: {remain}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
     )
}
export default Sms


// class Sms extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             remain: 100,
//         }
//     }

//     change=(event)=>{
//         this.setState(
//             {
//                 remain: 100-event.target.value.length
//             }
//         )
//     } 
   
//     render()
//     {
//         return(
//            <React.Fragment>
//                <div className='container mt-4'>
//                    <div className='card col-7'>
//                        <div className='card-heading bg-black text-white'>
//                            <h1> Send SMS </h1>
//                        </div>
//                        <div className='card-body'>
//                            <textarea type='text' maxLength="100"className='form-control' onChange={this.change} ></textarea>
//                        </div>
//                        <div className='card-footer'>
//                            <p>Number of characters remaining: {this.state.remain}</p>
//                        </div>
//                    </div>
//                </div>
//            </React.Fragment>
//         )
//     }
// }
// export default Sms