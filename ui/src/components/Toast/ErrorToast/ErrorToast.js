import React from 'react';
import './ErrorToast.css';
import Toast from './../Toast.js';

export default class ErrorToast extends React.Component {
    render() {
        return (
            <Toast title="Error" bgColor="bg-danger" textColor="text-white" delay={this.props.delay} onClose={this.props.onClose} autohide={this.props.autohide}>
                <div>{this.props.message}</div>
            </Toast>
        );
    }
}