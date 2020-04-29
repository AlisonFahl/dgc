import React from 'react';
import './Comment.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Comment extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col xs={7}><span><p>{this.props.alias}</p></span></Col>
                    <Col xs={5}><span>{this.props.date.toString()}</span></Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.props.text}</p>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Comment;
