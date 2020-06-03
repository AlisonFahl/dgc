import React from 'react';
import './SuccessToast.css';
import Toast from './../Toast.js';

export default class SuccessToast extends React.Component {
    render() {
        return (
            <Toast title="Success" bgColor="bg-success" textColor="text-white" delay={this.props.delay} onClose={this.props.onClose} autohide={this.props.autohide}>
                <div>{this.props.message}</div>
            </Toast>
        );
    }
}