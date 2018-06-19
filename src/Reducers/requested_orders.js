import {REMOVE_ORDER, FETCH_ORDER, FILTER_ORDER,UPDATE_STATUS } from '../Actions/orders';
import {getRequestsSync} from '../Api'

const intialAppState = getRequestsSync();


  function orderReducer(state=intialAppState, actions){
    switch(actions.type){
        case REMOVE_ORDER:
            let newState = state.filter((item, index)=>{
                if(item.id!=actions.orderObj.id){
                    return true;
                }    
            });
            return [...newState];
        break; 
        case FETCH_ORDER:
            return [...actions.payload]
        break;
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
        case UPDATE_STATUS:
            state.forEach((item)=>{
                if (item.id==actions.orderObj.id){
                    item.status= actions.newState;
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

                    item.updated_at = today;
                }
            }) 
            let editState = state;
            return[...editState];
        default:
            return state;
    }
  }

  export default orderReducer;