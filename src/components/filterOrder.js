import React,{Component} from 'react'
import {filter_order} from '../Actions/orders'
import { connect } from 'react-redux'

/*
* This component is designed to filter the requests depending upon the status
* used connect method from react-redux module to directly map states 
* filter_order is an action to let reducer know to change in state depending upon te status value passed
*/ 

class FilterOrder extends Component {

    // listen to the change in options and dispatch action and pass selected status too
    handleChange = (e)=>{
        const selectedValue = e.target.value;
        this.props.dispatch(filter_order(selectedValue))
    }

    render(){
        
        return  <div className="Filter_container">
        filter by status : 
        <select id='filterStatusValue' onChange={this.handleChange}>
            <option value="All">All Requests</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Denied">Denied</option>
        </select>
    </div>
    }
}

// returns the object to be passed as a props
function mapStateToProps(params){
    return{ 
        orders : params
    }
}

//connect with the redux store and add new props to the FilterOrder
export default connect(mapStateToProps)(FilterOrder);