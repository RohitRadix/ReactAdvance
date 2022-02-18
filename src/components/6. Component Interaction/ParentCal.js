import React from "react";
import ChildCal from "./ChildCal";

class ParentCal extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            calculator:{
            taxableVal:0,
            taxPercentage:0,
            },
            result:0,
        }
    }
    update=(event)=>{
       
        console.log(event.target.value)
        this.setState(
            {
                
                calculator:{
                    [event.target.name]: event.target.value
                }
                
            }
        )     
    }
    cal=(event)=>
    {
        event.preventDefault()
        this.setState(
            {
                ...this.state,
                result: parseInt(this.state.calculator.taxableVal) * parseInt(this.state.calculator.taxPercentage)
            }
        )
        console.log(this.state.result);
    }
    render()
    {
        return(
            <React.Fragment>
               <div className="container mt-5">
                   <div className="row">
                        <div className="card col ">
                            <div className="card-header bg-success text-white">
                                <h1>Total value calculator </h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.cal}>
                                        <label>Taxable value</label>
                                        <input type="number" name="taxableVal" className="form-control"onChange={this.update} value={this.state.calculator.taxableVal}></input>
                                        <br/>
                                        <label>Tax percentage</label>
                                        <input type="text" name="taxPercentage" className="form-control"onChange={this.update} value={this.state.calculator.taxPercentage}></input>
                                        <br/>
                                        <p>{this.state.result}</p>
                                        <button className="btn btn-success" 
                                        type="submit">Calculate</button>
                                </form>
                            </div>
                        </div>                       
                   </div>
                   <ChildCal/>
               </div>
            </React.Fragment>
        );
    }
}
export default ParentCal