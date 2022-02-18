import React, { useState } from "react";

import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";


let  Cart =()=>
{
    let[qty,setQty]= useState(1)
    let[price,]= useState(250)
    let[total,]= useState(250)

    let add=()=>
    {
        setQty(qty+1)
    }
    let sub=()=>
    {
        qty >1 ?  setQty(qty = qty-1) :
        setQty(1)

    }
    return( 
        
        <React.Fragment>
           <div className='App'>
            <table class="table">
                 <thead class="thead-dark">
                     <tr>
                     <th scope="col">S.no.</th>
                     <th scope="col">Image</th>
                     <th scope="col">Price</th>
                     <th scope="col">Quantity</th>
                     <th scope="col">Total</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                     <th scope="row">1</th>
                     <td><img src='https://www.ikea.com/in/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg?f=s' className='Img'></img></td>
                     <td>{price}</td>
                     <td><FaPlusCircle size={25} color={'green'}onClick={add}></FaPlusCircle>{qty}<FaMinusCircle size={25} color={'red'} onClick={sub}></FaMinusCircle></td>
                     <td>{qty*price}</td>
                     </tr>
                 </tbody>
             </table>
             </div>
        </React.Fragment>        
 )

}
export default Cart