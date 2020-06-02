import React from 'react';
import './Notification.css';
import ErrorToast from './../Toast/ErrorToast/ErrorToast.js';

export default class Notification extends React.Component {
    render() {
        const mapToToastComponent = (notification) => {
            switch (notification.type) {
                case "Error":
                    return <ErrorToast key={notification.key} message={notification.message}></ErrorToast>;
                default:
                    throw new Error("Invalid Notification Type");
            }
        };

        return (this.props.notifications.length ? this.props.notifications.map(mapToToastComponent) : <></>);
    }
}