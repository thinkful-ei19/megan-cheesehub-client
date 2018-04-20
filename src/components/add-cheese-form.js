import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { addCheese } from '../actions/actions';


export class AddCheeseForm extends React.Component{ 
   onSubmit(value) {
        return this.props.dispatch(addCheese(value))
    }
    
    render(){
        return(
            <form
                onSubmit={this.props.handleSubmit(value =>
                    this.onSubmit(value)
            )}
            >
            <label htmlFor="add cheese">Add Cheese:</label>
                <Field 
                    component="input"
                    type="text"
                    name="cheese"
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
