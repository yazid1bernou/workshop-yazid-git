import React , {Component} from "react";
import { Formik , Field } from "formik";
// Controller component

class App  extends Component {
     
  onSubmitFunction = (values) =>{
      console.log(values);
  }
  
  formFunction = (props) => {
     return (
       <form onSubmit={props.handleSubmit}>
            <label>Name</label>
            <Field name="name" />
            <br/>
            <label>Email</label>
            <Field name="email"  type="email" />
            <br/>
            <label> Situation</label>
            <Field name="situation"  type="checkbox" />
            <br/>
            <label>Category</label>
            <Field name="category"  component="select" > 
               <option value="category1">Category 1</option>
               <option value="category2">Category 2</option>
               <option value="category3">Category 3</option>
            </Field>

            <button type="submit">Send</button>
       </form>
     )
  }

  
   render () {
     
    return (
      <div>
           <Formik 
             initialValues={{ name : '' , email : '' , situation : 'true' , category : ''}} 
             onSubmit={this.onSubmitFunction}
             render={this.formFunction}
           />
            
           
      </div>
    )
     
   }
}

export default App;