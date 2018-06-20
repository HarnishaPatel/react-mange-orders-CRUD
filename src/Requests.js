import React,{Component} from 'react'

import './Requests.css'

import FilterOrder from './components/filterOrder'
import OrderTable from './components/OrderTable'

/*
* To follow single responsibility principle created components that do only one task
* FilterOrder component is to filter data by status
* OrderTable component is to generate table view
*/

class Requests extends Component{

    render(){
    
        return <div className='main_container' >
            <h1>Requests</h1>
            <FilterOrder/> 
            <OrderTable/>
        </div>
    }

}

export default Requests;


