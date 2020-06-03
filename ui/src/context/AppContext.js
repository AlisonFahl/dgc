import React from "react";
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

    onShowNotification = (type, message, delay) => {
        this.state.notifications.push({ key: ++this.notificationCount, type, message, delay });
        this.setState({
            notifications: this.state.notifications
        });
    }

    onHideNotification = (key) => {
        this.setState({
            notifications: this.state.notifications.filter(x => x.key !== key)
        });
    }

    render() {
        const contextValue = {
            notification: {
                error: (message, delay) => { this.onShowNotification("Error", message, delay) },
                info: (message, delay) => { this.onShowNotification("Info", message, delay) },
                success: (message, delay) => { this.onShowNotification("Success", message, delay) },
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
