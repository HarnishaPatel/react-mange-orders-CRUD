import React,{Component} from 'react'
import { Popover, PopoverBody, PopoverHeader,Button } from 'reactstrap'
import { update_status } from '../Actions/orders'
import { connect } from 'react-redux'

class PopOver extends Component{

    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state= {
            popoverOpen:false
        };
    }

    toggle(){
        this.setState({
            popoverOpen:!this.state.popoverOpen
        });
    }

    approved(data){
        console.log("approved", data);
    }

    denied(data){
        console.log("approved", data);
    }

    onUpdateStatus(orderObj, newStatus){
        this.props.dispatch(update_status(orderObj, newStatus))
        this.toggle();
    }

    render(){
        
        return <span>
            <a className="statusLink" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
            {this.props.item.status} 
            </a>
            {this.props.item.status=="Pending"  &&
                <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                <PopoverHeader>
                <a  className="statusLink" onClick={()=>{ this.onUpdateStatus(this.props.item, "Approved")}}>Approved</a> <br/>
                <a  className="statusLink" onClick={()=>{ this.onUpdateStatus(this.props.item, "Denied")}}>Denied</a> 
                </PopoverHeader>
                
                </Popover>
            }
        </span>
    }
}

function mapStateToProps(params){
    return{ 
        orders : params
    }
}

export default connect(mapStateToProps)(PopOver);
