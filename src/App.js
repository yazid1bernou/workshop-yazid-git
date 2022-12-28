import React , {Component} from "react";
import { Formik , Field , ErrorMessage , FieldArray } from "formik";
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
             <label>Facebook</label>
            <Field name="social.facebook" /> 
            <ErrorMessage name="social.facebook" />
            <br/>
            <label>Twitter </label>
            <Field name="social.twitter" /> 
            <ErrorMessage name="social.twitter" />
            <br/>
             <h3>Friends </h3>
            <FieldArray 
               name="friends"
               render ={arrayHelpers => (
                <div>
                       {props.values.friends.map((friend , index) => (
                         <div key={index}>
                              <Field name={`friends.${index}`} />
                              <button type="button" onClick={() => {arrayHelpers.remove(index)}}>Remove </button>
                              <ErrorMessage name={`friends.${index}`} />
                             
                         </div>
                         
                       )) 
                        
                       }
                        <button type="button" onClick={()=> {arrayHelpers.push('')}}>Add</button>
                </div>

               )

               }
            />
            <br />
            <hr />
            <h3>Profil Of Users  </h3>
            <FieldArray 
               name="profilUsers"
               render ={arrayHelpers => (
                <div>
                       {props.values.profilUsers.map((user , index) => (
                         <div key={index}>
                              <Field name={`profilUsers[${index}].firstName`} placeholder='First Name' />
                              <ErrorMessage name={`profilUsers.${index}].firstName`} />
                              <Field name={`profilUsers[${index}].lastName`} placeholder='Last Name' />
                              <ErrorMessage name={`profilUsers.${index}.lastName`} />
                              <Field name={`profilUsers[${index}].Age`} placeholder='Age' />
                              <ErrorMessage name={`profilUsers.${index}.Age`} />
                              <button type="button" onClick={() => {arrayHelpers.remove(index)}}>Remove </button>
                              <ErrorMessage name={`profilUsers.${index}`} />
                             
                         </div>
                         
                       )) 
                        
                       }
                        <button type="button" onClick={()=> arrayHelpers.push({firstName : '' , lastName : '' , Age : ''})}>Add</button>
                </div>

               )

               }
            />
            
            <button type="submit"> Send </button>
       </form>
     )
  }
   
  schema = () => {
      const schema =  Yup.object().shape({
        name : Yup.string().required(),
        email : Yup.string().required(),
        situation : Yup.string().required(),
        category : Yup.string().required(),
        social : Yup.object().shape({
          facebook : Yup.string().required('Facebook link is required field'),
          twitter : Yup.string().required('Twitter link is required field'),
        
        }),
        friends : Yup.array().of(
           Yup.string().required()
        ) ,
      
       
        
      });
      return schema ;
  }
  
   render () {
     
    return (
      <div>
           <Formik 
             initialValues={{ name : '' ,
              email : '' , 
              situation : 'true' ,
              category : '' , 
              social : {
                 facebook : '' ,
                 twitter : '' ,
                
             } ,
             friends : ['yazid' , 'adem'] ,
             profilUsers : [
              { firstName : "qsdqsdqsd" , lastName : "qsdqsdqsd" , Age : '42'} ,
             
             ]
            } } 
             onSubmit={this.onSubmitFunction}
             render={this.formFunction}
             validationSchema = {this.schema()}
           />
            
           
      </div>
    )
     
   }
}

export default App;