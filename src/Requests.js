import React,{Component} from 'react'
import {remove_user, fetch_users} from './Actions/orders'
import { connect } from 'react-redux'

import './Requests.css'

import FilterOrder from './components/filterOrder'
import OrderTable from './components/OrderTable'

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


