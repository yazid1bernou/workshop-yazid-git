import React , {Component} from "react";
import axios from "axios" ;
import ViewUser from "./ViewUser";


class AxiosGetAPI extends Component {
          
    state = {
        users : [] , 
        user : {} ,
        
    }
     
     componentDidMount = async() => {
        await axios.get('https://jsonplaceholder.typicode.com/users').then( response => {
            this.setState({
                users :  response.data
            })
            console.log(response.data)
        });
     }
     userActive = (user) => {
         this.setState({
            'user' : user 
         }) 
         console.log(user);
     }
    // Detail User 
    deleteUserApi = async(id , user) =>{
        
        await axios.delete("https://jsonplaceholder.typicode.com/users/"+id )
       .then( response => {
        const users =  this.state.users ;
        const index =  users.indexOf(user);
        users.splice(index , 1);
        this.setState({users});  
        alert("You are deleted User");
       }) ;
       
    } 
   
     render() {
        
        return (
            <div>
                    <h1> List of Users </h1>
                
                    {this.state.users.map((user) => (
                 
                       <ul> 
                           <li>{user.name}</li>
                           <button type="button" onClick={()=> this.userActive(user)}>Detail</button>
                           <button type="button" onClick={()=> this.deleteUserApi( user.id , user)}> Delete</button>
                       </ul>  
                    ))}
                   
                  <ViewUser name={this.state.user.name} username={this.state.user.username} email={this.state.user.email} />

                       
                       
                       
                  
            </div>
        )
     }
}


export default AxiosGetAPI ;