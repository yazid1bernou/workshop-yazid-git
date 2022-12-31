import React , {Component} from "react";
import axios from "axios" ;



class AxiosGetAPI extends Component {
          
    state = {
        users : []
    }
     
     componentDidMount = async() => {
        await axios.get('https://jsonplaceholder.typicode.com/users').then( response => {
            this.setState({
                users :  response.data
            })
        });
     }


     render() {
       
        return (
            <div>
                <h1> List of Users </h1>
                <ul>
                    {this.state.users.map((user) => (
                 
                       
                        <li>{user.name}</li>
                    
                    ))}
                </ul>   
            </div>
        )
     }
}


export default AxiosGetAPI ;