import {REMOVE_ORDER, FETCH_ORDER, FILTER_ORDER,UPDATE_STATUS } from '../Actions/orders';
import {getRequestsSync} from '../Api'

/*
* Redux Reducer
* Responsible to handle all Actions dispatched by store and change the update the state of data
*/

const intialAppState = getRequestsSync();

// Returns today's date and make a date format that matches with given JSON formatted date
    const generateDate = ()=>{
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        var hh =today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        
        if(dd<10) {
            dd = '0'+dd
        }
        if(mm<10) {
            mm = '0'+mm
        }
        today = yyyy + '-' + mm + '-' + dd +"  "+hh+":"+min+":"+sec;
        return today;
    }


//Reducer responsible for managing all the Actions  
function orderReducer(state=intialAppState, actions){

    switch(actions.type){

        // remove order from state and return new state
        case REMOVE_ORDER:
            let newState = state.filter((item, index)=>{
                if(item.id!=actions.orderObj.id){
                    return true;
                }    
            });
            return [...newState];
        break; 
        
        // return all requests - initial stage
        case FETCH_ORDER:
            return [...actions.payload]
        break;

        // filter data depending upon status selected
        case FILTER_ORDER:
            let FilteredState = intialAppState.filter((item, index)=>{
                if(item.status==actions.orderObj){
                    return true;
                }
                if(actions.orderObj=="All"){
                    return true;
                }    
            });
            return [...FilteredState];
        break;

        //update the status and mark updated_at as today's date adn return new state 
        case UPDATE_STATUS:
            state.forEach((item)=>{
                if (item.id==actions.orderObj.id){
                    item.status= actions.newState;
                    item.updated_at = generateDate();
                }
            }) 
            let editState = state;
            return[...editState];
        
        //In default case return state as it is    
        default:
            return state;
    }
  }

  export default orderReducer;