import React from 'react';
import './Form.css';
import BSForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default class Form extends React.Component {
    ALIAS_CHAR_LIMIT = 30;
    MESSAGE_CHAR_LIMIT = 280;

    constructor() {
        super();

        this.state = {
            alias: "",
            message: "",
        };

        this.wrapper = React.createRef();
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

    renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );
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
                {this.props.canSubmit ?
                    <Button variant="dark" type="submit">Submit</Button> :
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No web3 provider found in your browser for this page</Tooltip>}>
                        <span ref={this.wrapper} className="d-inline-block">
                            <Button variant="outline-dark" type="submit" disabled style={{ pointerEvents: 'none' }}>Submit</Button>
                        </span>
                    </OverlayTrigger>}
            </BSForm>
        );
    }
}