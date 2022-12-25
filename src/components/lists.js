import React from "react";

function Lists () {
        const users = ['amine' , 'yazid' , 'adem']
    return (
        <div>
               <h1> This users List </h1> 
               <ul>
                  {users.map(item => 
                    <li key={item}>{item}</li>  
                    
                    )}
               </ul>
             
        </div>
    )
}

export default Lists ;
