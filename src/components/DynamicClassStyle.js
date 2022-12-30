import React , {Component} from "react";
import './style.css';

class DynamicClassStyle  extends Component {
      
     
     render () {
          // Using method of string 
          let classes  =  '';
          if (true) {
             classes += 'greenBackGound ';   
          }
          if(true){
             classes += 'redBackGound ';
          }
          if(true){
             classes += 'colorText ' ;
          }
          // Using method of Array 
         let classesArray = [] ;
         if (true) {
          classesArray.push('greenBackGound')
         }
         if(true){
          classesArray.push('redBackGound')
         }
         if(true){
          classesArray.push('colorText')
         }
        return (

           <div className={classesArray.join(' ')}>
                 This is Test TEXT 
           </div>
        )
     }
}

export default  DynamicClassStyle ;