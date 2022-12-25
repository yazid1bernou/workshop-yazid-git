import React , {Component} from "react";

//  before hooks , we can use state with class component only .
// after Hooks we can use state with function component 
class Hello extends Component {

    constructor (props) {
        
        super(props);
        this.decrease =  this.decrease.bind(this);
    }
     state = {
        age :  3,
        name : "adem" ,
        user : {
            name : "bernou" ,
            lastName : "ayoub adem" , 
            profil : "Good Boy"
        },
        socialLinks :  [
            'facebook',
            'twitter'
            
        ]
     }

     decrement = () => {    // Arrow function 
        this.setState({age : this.state.age - 1});
     }

     decrease () {
        this.setState({age : this.state.age - 1});
     }
     
     updateLastname (event) { 
         const newlastName = event.target.value ;
         this.setState({
           user: {
             ...this.state.user ,
            lastName : newlastName,
            
           }
         })
     }
    render () {
        console.log(this.state.user) ;
        console.log(this.state.socialLinks)
        return (
            <div>
                  <h1>This is Class component Hello  {this.props.name} and : {this.props.lastName}</h1>
                  <h2> Show name with state : {this.state.name}</h2>
                  <p> Show user : { this.state.user.lastName }</p> 
                  <p> Show Social Link :  {this.state.socialLinks} </p>
                  <p> Show Age of Adem : {this.state.age} </p>
                  <button type="button" onClick={() => this.setState({age : this.state.age + 1 })}> Increase </button>
                  <button type="button" onClick={this.decrement}>Decrease </button>
                  <button type="button" onClick={this.decrease}> Decrease with Function </button>
                  <input type="text"  onChange={this.updateLastname.bind(this)}  />
            </div>
        )
    }
}

export default Hello ;