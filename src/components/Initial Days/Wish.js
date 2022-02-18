import React, { useState } from "react";

let Wish=()=>{
    let [msg, setmsg] = useState("Hello")
    let greet=(value)=>
    {
        setmsg(value)

    }
    return(
        <React.Fragment>
            
                    
                    <h1>Wish</h1>
                    <h3>{msg}</h3>
                            <button onClick={greet.bind(this, 'Good Morning')}>Good Morning</button>
                            <button onClick={greet.bind(this, 'Good Afternoon')}>Good Afternoon</button>
                            <button onClick={greet.bind(this, 'Good Evening')}>Good Evening</button>
                    
                        </React.Fragment>
                )
}
export default Wish