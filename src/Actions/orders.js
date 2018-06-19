import { getRequestsSync, getRequests} from '../Api'

export const REMOVE_ORDER= 'REMOVE_ORDER';
export const FETCH_ORDER= 'FETCH_ORDER';
export const FILTER_ORDER= 'FILTER_ORDER';
export const UPDATE_STATUS ='UPDATE_STATUS';

export function remove_order(orderObj){
    return {
        type : REMOVE_ORDER,
        orderObj
    }
} 

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

export function filter_order(orderObj){
    return {
        type : FILTER_ORDER,
        orderObj
    }
}

export function update_status(orderObj,newState){
    console.log('update status')
    return{
        type: UPDATE_STATUS,
        orderObj,newState
    }
}


