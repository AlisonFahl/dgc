import React from 'react';
import './Notification.css';
import ErrorToast from './../Toast/ErrorToast/ErrorToast.js';
import InfoToast from './../Toast/InfoToast/InfoToast.js';
import SuccessToast from './../Toast/SuccessToast/SuccessToast.js';

export default class Notification extends React.Component {
    render() {
        const mapToToastComponent = (notification) => {
            const props = {
                key: notification.key,
                message: notification.message,
                delay: notification.delay,
                autohide: notification.delay > 0,
                onClose: () => this.props.onHideNotification(notification.key)
            };

            switch (notification.type) {
                case "Error":
                    return <ErrorToast {...props}/>;
                case "Info":
                    return <InfoToast {...props} />;
                case "Success":
                    return <SuccessToast {...props} />;
                default:
                    throw new Error("Invalid Notification Type");
            }
        };

        return (
            <div style={{ position: 'fixed', top: 50, right: 0 }}>
                {this.props.notifications.map(mapToToastComponent)}
            </div>
        );
    }
}