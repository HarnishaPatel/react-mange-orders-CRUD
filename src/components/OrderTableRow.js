import React, {Component} from 'react'
import {remove_order, fetch_orders} from '../Actions/orders'
import { connect } from 'react-redux'
import PopOver from './PopOver';


class OrderTableRow extends Component{


    componentWillMount(){
        this.props.dispatch(fetch_orders());       
    };

    onRemoveOrder=(orderData)=>{
        this.props.dispatch(remove_order(orderData))
    }
    
    

    render(){
        
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


function mapStateToProps(params){
    return{ 
        orders : params
    }
}

export default connect(mapStateToProps)(OrderTableRow);