import React from 'react';
import './Chat.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Comment from './../Comment/Comment';
import Form from './../Form/Form';
import ChatService from './../../services/ChatService/ChatService.js';

class Chat extends React.Component {
    constructor() {
        super();

        this.state = {
            comments: []
        };

        this.service = new ChatService();
    }

    componentWillMount() {
        this.service.getTotalMessages()
            .then((total) => {
                total = parseInt(total);
                const fetchCommentsTasks = [];
                for (let i = 0; i < total; i++) {
                    fetchCommentsTasks.push(this.service.getMessage(i));
                }
                Promise.all(fetchCommentsTasks)
                    .then((results) => {
                        this.setState({
                            comments: results.map((comment, i) => {
                                return {
                                    id: i,
                                    alias: comment.senderAlias,
                                    text: comment.message,
                                    date: new Date(comment.timestamp),
                                }
                            }),
                        })
                    });
            });
    }


    render() {
        return (
            <>
                <Row>
                    <Col>
                        {
                            this.state.comments.length > 0 && this.state.comments.map((x) =>
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