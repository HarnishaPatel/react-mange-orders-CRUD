import React, {Component} from 'react'
import {remove_order, fetch_orders} from '../Actions/orders'
import { connect } from 'react-redux'
import PopOver from './PopOver';

/*
* This component is responsible for handeling view of table-rows
* sort data into newest first manner
* Dispatch two actions: 
* 1) fetch all orders from store at the intial stage of component
* 2) delete user and reflact the changes on view
*/

class OrderTableRow extends Component{

    //dispatch action before the componet mount to get all the order requests
    componentWillMount(){
        this.props.dispatch(fetch_orders());       
    };

    //dispatch an action to delete an order and pass the object of order selected by user to delete 
    onRemoveOrder=(orderData)=>{
        this.props.dispatch(remove_order(orderData))
    }
    

    render(){
       
       //sort data into decending order
       this.props.orders.sort(function(item1, item2){
           if(item1.updated_at < item2.updated_at){
               return 1;
           }
           else if(item1.updated_at > item2.updated_at){
            return -1
            }
            else{
                return 0;
            }
       });
       
       return <tbody>
                {
                    this.props.orders.map((item, index)=>{
                        // myid is a unique id that genretate unique status that is used to target perticular row   
                        this.myid = `popOverStatus${index}`

                        return <tr className={item.status} key={index}>
                            <td> {item.title} </td>
                            <td id={this.myid} >
                                <PopOver key={index} id={ this.myid } item={item}/>
                            </td>
                            <td> {item.created_at.split(' ')[0]} </td>
                            <td> {item.updated_at.split(' ')[0]} </td>
                            <td> <a onClick={()=>this.onRemoveOrder(item)}>Delete</a> </td>
                        </tr>
                    })
                }    
            </tbody>  
    }
}

// returns the object to be passed as a props
function mapStateToProps(params){
    return{ 
        orders : params
    }
}

//connect with the redux store 
export default connect(mapStateToProps)(OrderTableRow);