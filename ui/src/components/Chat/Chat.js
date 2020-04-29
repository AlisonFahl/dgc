import React from 'react';
import './Chat.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Comment from './../Comment/Comment';
import Form from './../Form/Form';

class Chat extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        {
                            this.props.comments.map((x) =>
                            <Row key={x.id}>
                                <Col>
                                        <Comment {...x} />
                                </Col>
                            </Row>
                            )
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form/>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Chat;