import React from 'react';
import './Form.css';
import BSForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Form extends React.Component {
    ALIAS_CHAR_LIMIT = 30;
    MESSAGE_CHAR_LIMIT = 280;

    constructor() {
        super();

        this.state = {
            alias: "",
            message: "",
        };
    }

    handleSubmit = (event) => {
        if (this.isFormValid()) {
            this.props.postComment({
                alias: this.state.alias,
                message: this.state.message,
            });
        }

        event.preventDefault();
    }

    isFormValid = () => {
        return this.getCharsLeft(this.state.alias, this.ALIAS_CHAR_LIMIT) >= 0 && this.getCharsLeft(this.state.message, this.MESSAGE_CHAR_LIMIT) >= 0;
    }

    getCharsLeft(s, limit) {
        return (limit - s.length);
    }

    render() {
        return (
            <BSForm onSubmit={this.handleSubmit}>
                <BSForm.Group controlId="formAlias">
                    <BSForm.Label>Alias:</BSForm.Label>
                    <BSForm.Control onChange={(e) => { this.setState({ alias: e.target.value }) }} isInvalid={this.getCharsLeft(this.state.alias, this.ALIAS_CHAR_LIMIT) < 0} type="text" placeholder="Choose an alias (leave it empty for posting anonymously)" />
                    <BSForm.Text className="text-muted">
                        {this.getCharsLeft(this.state.alias, this.ALIAS_CHAR_LIMIT).toString()} chars left
                    </BSForm.Text>
                </BSForm.Group>
                <BSForm.Group controlId="formMessage">
                    <BSForm.Label>Message:</BSForm.Label>
                    <BSForm.Control onChange={(e) => { this.setState({ message: e.target.value }) }} isInvalid={this.getCharsLeft(this.state.message, this.MESSAGE_CHAR_LIMIT) < 0} as="textarea" placeholder="Type Message..." />
                    <BSForm.Text className="text-muted">
                        {this.getCharsLeft(this.state.message, this.MESSAGE_CHAR_LIMIT).toString()} chars left
                    </BSForm.Text>
                </BSForm.Group>
                <Button variant="dark" type="submit">Submit</Button>
            </BSForm>
        );
    }
}