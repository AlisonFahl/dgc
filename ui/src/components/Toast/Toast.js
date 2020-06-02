import React from 'react';
import './Toast.css';
import BSToast from 'react-bootstrap/Toast';

export default class Toast extends React.Component {
    render() {
        return (
            <BSToast className={`${this.props.bgColor} ${this.props.textColor}`}>
                <BSToast.Header className="bg-dark text-white">
                    <strong className="mr-auto">{this.props.title}</strong>
                </BSToast.Header>
                <BSToast.Body>{this.props.children}</BSToast.Body>
            </BSToast>
        );
    }
}