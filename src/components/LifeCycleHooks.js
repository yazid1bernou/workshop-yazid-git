import React , {Component} from "react";



function ListComponent (props) {
    const lists=  props.lists ;
    return (
        <div>
             <ul>
                   {lists.map((list, index) => 
                      <li key={list.id}>{index} * {list.name}</li>
                      
                    )}
                </ul> 
        </div>
    )
}
function ConditionComponent (props) {
    const age = props.age ;
    let template =  '';
    if (age > 10) {
        template = <h1> Your age older than 10 </h1> ;
    }
    else {
       template =  <h1>Your age smaller than 10 </h1> ;
    }

    return (
        <div>
            {template}
        </div>
    )
}


class LifeCycleHooks extends Component {
  
  
    render() {
        
         
         let members = [
            {id : 1 ,  name : 'yazid' , age : 34},
            {id : 2 , name : 'khaoula' ,age : 32},
            {id : 3 , name : 'adem' , age : 3}
         ]
         
         let users =  [
            {id : 1 , name : 'amine' , age : 50} , 
            {id : 2 , name : 'khalil' , age : 25}
         ]
        
        return (
            <div>
                <ListComponent lists={members} />
                <ListComponent lists={users} />
                <ConditionComponent age={6} />
                    
                
           
                  

            </div>
        
        )
    }
}

export default LifeCycleHooks ; 