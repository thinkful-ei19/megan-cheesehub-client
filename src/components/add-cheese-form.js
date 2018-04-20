import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import { addCheese } from '../actions/actions';


class AddCheeseForm extends React.Component{ 

    
    render(){
        return(
            <form
                // onSubmit={}
            
            >
                <Field 
                    component='input' 
                    element='input' 
                    name='cheeseName' 
                    placeholder="Add New Cheese Here"
                />
                
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'cheese',
})(AddCheeseForm);
