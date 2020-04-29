import React from 'react';
import './Form.css';
import BSForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Form extends React.Component {
    render() {
        return (
            <BSForm>
                <BSForm.Group controlId="formAlias">
                    <BSForm.Label>Alias:</BSForm.Label>
                    <BSForm.Control type="text" placeholder="Choose an alias (leave it empty for posting anonymously)" />
                    <BSForm.Text className="text-muted">
                        30 chars left
                    </BSForm.Text>
                </BSForm.Group>
                <BSForm.Group controlId="formMessage">
                        <BSForm.Label>Message:</BSForm.Label>
                        <BSForm.Control as="textarea" placeholder="Type Message..." />
                        <BSForm.Text className="text-muted">
                            280 chars left
                        </BSForm.Text>
                </BSForm.Group>
                <Button variant="dark" type="submit">Submit</Button>
            </BSForm>
        );
    }
}