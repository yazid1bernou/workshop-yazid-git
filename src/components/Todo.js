import React , {Component} from "react";


class Todo extends Component {
     
    state = {
        newTask : '',
        todoList : [
            {text : 'learn python'},
            {text : 'learn javascript'},
            {text :  'learn React js'}
        ]
    }

    deleteTask = (index) => {  // Arrow function 
        const todoList  = [...this.state.todoList] ;  //  save currently data
        todoList.splice(index , 1)
        this.setState({
            todoList
        }) ;

    }
    AddTask = () => {
        const todoList =  [...this.state.todoList];
        todoList.push({
            text : this.state.newTask
        })
        
        this.setState({
            todoList ,
            newTask : ''
        })

        
    }

    updateNewTask = (event) =>{
       
        this.setState({
            newTask : event.target.value
        })
    }
   render () {
    
    return (

        <div>
            <h1>This is class component of Todo List </h1>
            <ul>
                {this.state.todoList.map((list , index) => 
                    <li> {list.text} - 
                    
                      <button type="button" onClick={() =>this.deleteTask(index)}>Done</button>
                    
                    </li>
                  
                )}
                
            </ul>
            <input type="text" name="" value={this.state.newTask} onChange={this.updateNewTask} /> 
            <button type="button" onClick={this.AddTask}>Add Task</button>
            
        </div>
    )
   }

}

export default Todo;