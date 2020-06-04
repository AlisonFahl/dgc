import React from 'react';
import './Comment.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Identicon from 'react-identicons';

class Comment extends React.Component {
    render() {
        const dateFormat = new Intl.DateTimeFormat('default', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', });
        return (
            <>
                <Row>
                    <Col sm={12} md={3} lg={2}>
                        <div style={{ textAlign: "center" }} title={this.props.address}>
                            <Identicon size="42" string={this.props.address} />
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col sm={12}><h6><strong>{this.props.alias}</strong></h6></Col>
                            <Col sm={12}><small className="text-muted">{dateFormat.format(this.props.date)}</small></Col>
                        </Row>
                    </Col>
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
