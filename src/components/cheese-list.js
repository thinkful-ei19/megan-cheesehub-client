import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/actions';

class CheeseList extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(fetchCheeses())
    }
    
    render(){
        console.log(this.props);
    const cheeseList = this.props.cheeses.map((cheese, index)=>{
        return(
            <li key={index}> {cheese} </li>
        )
    })
        return(
            <div>
                <ul>
                    {cheeseList}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    cheeses: state.auth.cheeses
})

export default connect(mapStateToProps)(CheeseList);