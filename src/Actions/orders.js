import { getRequestsSync, getRequests} from '../Api'

/*
* Redux Action 
*/

// variable for types of Actions so even in furture if the type needs to be change, just change the value of variable   
export const REMOVE_ORDER = 'REMOVE_ORDER';
export const FETCH_ORDER = 'FETCH_ORDER';
export const FILTER_ORDER = 'FILTER_ORDER';
export const UPDATE_STATUS ='UPDATE_STATUS';

// Action to remove order
export function remove_order(orderObj){
    return {
        type : REMOVE_ORDER,
        orderObj
    }
} 

// Once the responce is available Dispatch an Action to fetch_order
export function fetch_orders(orderObj){
        return (dispatch)=>{
            const data = getRequests().then((data)=>{
                if(data){
                    dispatch({
                        type : FETCH_ORDER,
                        payload:data
                    });   
                 }
            })
        }; 
}

//Dispatch an to filter order depending upon the status selected by user
export function filter_order(orderObj){
    return {
        type : FILTER_ORDER,
        orderObj
    }
}

//Dispatch an action to update status from Pending to Approved or Denied
export function update_status(orderObj,newState){
    console.log('update status')
    return{
        type: UPDATE_STATUS,
        orderObj,
        newState
    }
}


