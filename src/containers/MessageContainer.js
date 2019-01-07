import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from "../components/Message";

class MessageContainer extends Component {

    render() {
        return (
            <Message message={this.props.message}/>
        );
    }
}


    const mapStateToProps = state => {
        return {
            message : state.message
        };
    };


export default connect(mapStateToProps,null)(MessageContainer);
