import React, { Component } from 'react'
import { Popover, PopoverBody, PopoverHeader, Button } from 'reactstrap'
import { update_status } from '../Actions/orders'
import { connect } from 'react-redux'

/*
* This component is responsible for:
* Conditional rendering, If the status is pending only then show the popover on click
* Update status of request from Pending to Approved or Denied
*/

class PopOver extends Component {

    //unique id is sent as props
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    //toggle popover to show or hide
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    //Dispatch an action to update the state and pass object and new status selected by user
    onUpdateStatus(orderObj, newStatus) {
        this.props.dispatch(update_status(orderObj, newStatus))
        this.toggle();
    }

    render() {

        return <span>
            
            <a className="statusLink" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
                {this.props.item.status}
            </a>

            {/* conditional rendering- if status is pending only then show popover */}
            {this.props.item.status == "Pending" &&
                <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverBody>
                        <ul className="popover_ul">
                            <li>
                                <a onClick={() => { this.onUpdateStatus(this.props.item, "Approved") }}>Approved</a>
                            </li>
                            <li>
                                <a onClick={() => { this.onUpdateStatus(this.props.item, "Denied") }}>Denied</a>
                            </li>
                        </ul>
                    </PopoverBody>

                </Popover>
            }
        </span>
    }
}

function mapStateToProps(params) {
    return {
        orders: params
    }
}

export default connect(mapStateToProps)(PopOver);
