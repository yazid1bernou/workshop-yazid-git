import React from "react";

function Conditions () {
       const age = 10 ;
    return (
        <div>
             {age > 10 ?
              <div> You are older than 10 . </div> : 
               <div>  You are smaler than 10.</div>
                
             
                
             }
        </div>
    )
}

export default Conditions ;