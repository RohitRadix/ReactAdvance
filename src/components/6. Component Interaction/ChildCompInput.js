//Program to show typed content of parent comonent in Child and vise verasa

import React, { useState } from "react";
let ChildCompInput=(props)=>
{
  
  let update=(event)=>
  {
    props.get(event.target.value);
  }
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="card">
          <div className="card-header bg-lightgreen">
            <h1>Child</h1>
          </div>
          <div className="card-body">
            <input type="text" className="form-control" onChange={update}></input>
            <br />
            <p>{props.val}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}
export default ChildCompInput


// import React from "react";

// class ChildCompInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }

//   update = (event) => {
//     this.props.get(event.target.value);
//     // this.setState({
//     //   childData: event.target.value,
//     // });
    
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="container mt-3">
//           <div className="card">
//             <div className="card-header bg-lightgreen">
//               <h1>Child</h1>
//             </div>
//             <div className="card-body">
//               <input type="text" className="form-control" onChange={this.update}></input>
//               <br />
//               <p>{this.props.val}</p>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default ChildCompInput;
