import React,{Component} from 'react'
import {filter_order} from '../Actions/orders'
import { connect } from 'react-redux'

class FilterOrder extends Component {

    

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

function mapStateToProps(params){
    return{ 
        orders : params
    }
}

export default connect(mapStateToProps)(FilterOrder);