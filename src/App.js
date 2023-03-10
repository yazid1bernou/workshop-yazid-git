import React , {Component} from "react";
import { Formik , Field , ErrorMessage  } from "formik";
import * as Yup from 'yup';

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
            <ErrorMessage name="name" />
            <br/>
            <label>Email</label>
            <Field name="email"  type="email" />
            <br/>
            <ErrorMessage name="email" />
            <br/>
            <label> Situation</label>
            <Field name="situation"  type="checkbox" />
            <br/>
            <ErrorMessage name="situation" />
            <br/>
            <label>Category</label>
            <Field name="category"  component="select" > 
               <option value="category1">Category 1</option>
               <option value="category2">Category 2</option>
               <option value="category3">Category 3</option>
            </Field>
            <br/>
            <ErrorMessage name="category" />
            <br/>

            <button type="submit">Send</button>
       </form>
     )
  }
   
  schema = () => {
      const schema =  Yup.object().shape({
        name : Yup.string().required(),
        email : Yup.string().required(),
        situation : Yup.string().required(),
        category : Yup.string().required(),
      });
      return schema ;
  }
  
   render () {
     
    return (
      <div>
           <Formik 
             initialValues={{ name : '' , email : '' , situation : 'true' , category : ''}} 
             onSubmit={this.onSubmitFunction}
             render={this.formFunction}
             validationSchema = {this.schema()}
           />
            
           
      </div>
    )
     
   }
}

export default App;