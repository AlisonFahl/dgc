import React, { Component } from "react";
import Notification from './../components/Notification/Notification.js';

const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
    constructor() {
        super();

        this.state = {
            notifications: []
        };

        this.notificationCount = 0;
    }

    onShowNotification = (type, message) => {
        this.setState({
            notifications: [...this.state.notifications, { key: ++this.notificationCount, type, message}]
        });
    }

    onHideNotification = () => {

    }

    render() {
        const contextValue = {
            notification: {
                show: this.onShowNotification
            }
        };

        return (
            <AppContext.Provider value={contextValue}>
                {this.props.children}
                <Notification notifications={this.state.notifications} onHideNotification={this.onHideNotification} />
            </AppContext.Provider>
        );
    }
}

export default AppContext;
