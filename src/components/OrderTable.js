import React,{Component} from 'react'

import OrderTableRow from './OrderTableRow'

/*
* This component renders the view of table.
* OrderTableRow is another component which is responsible for rendering rows of table
*/


class OrderTable extends Component {

    render(){
    
        return <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <OrderTableRow/>      
        </table>    
    </div>
    }
}

export default OrderTable