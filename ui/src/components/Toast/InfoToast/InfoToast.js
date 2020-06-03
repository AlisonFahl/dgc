import React from 'react';
import './InfoToast.css';
import Toast from './../Toast.js';

export default class InfoToast extends React.Component {
    render() {
        return (
            <Toast title="Info" bgColor="bg-info" textColor="text-white" delay={this.props.delay} onClose={this.props.onClose} autohide={this.props.autohide}>
                <div>{this.props.message}</div>
            </Toast>
        );
    }
}