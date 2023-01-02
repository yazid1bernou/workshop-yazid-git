import React from "react";

function ViewUser (props) {
    return (
        <div>
                <h2> Detail user :  {props.name}</h2>  
                <span> Username : {props.username} </span>
                <span> Email : {props.email}</span>
        </div>
    )
}

export default ViewUser ; 
