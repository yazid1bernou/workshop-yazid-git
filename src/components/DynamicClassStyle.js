import React , {Component} from "react";
import './style.css';
import classNames from "classnames";

class DynamicClassStyle  extends Component {
      
     
     render () {
          let classes = classNames({ greenBackGound : true , redBackGound : 1 > 2  , colorText : true })
         
     
        return (

           <div className={classes}>
                 This is Test TEXT 
           </div>
        )
     }
}

export default  DynamicClassStyle ;