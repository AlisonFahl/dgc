import React from 'react';
import './Chat.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Comment from './../Comment/Comment';
import Form from './../Form/Form';
import ChatService from './../../services/ChatService/ChatService.js';
import AppContext from './../../context/AppContext.js';
import Spinner from 'react-bootstrap/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

class Chat extends React.Component {
    constructor() {
        super();

        this.state = {
            comments: [],
            canSubmit: false,
        };

        this.service = new ChatService();
    }

    postComment = (comment) => {
        this.context.notification.info(
            <div><Spinner size="sm" animation="border" variant="dark" /><span style={{ marginLeft: "10px" }}>Posting new comment...</span></div>
            , 5000);

        this.service.postMessage(comment.message, comment.alias)
            .then(() => this.context.notification.success("Comment posted with success!", 3000))
            .catch(() => {
                this.context.notification.error("Error posting new comment", 3000);
            });
    }

    loadComment = (id) => {
        this.service.getMessage(id)
            .then((msg) => {
                this.setState((state, props) => {
                    return {
                        comments: [...state.comments, {
                            id: id,
                            alias: msg.senderAlias,
                            text: msg.message,
                            date: new Date(msg.timestamp),
                        }]
                    };
                });
            });
    }

    fetchNewComments = () => {
        this.service.getTotalMessages()
            .then((total) => {
                total = parseInt(total);
                const startAt = this.state.comments.length;
                for (let i = startAt; i < total; i++) {
                    this.loadComment(i);
                }
            });
    }



    componentDidMount() {
        this.setState({
            canSubmit: window.ethereum || window.web3
        });

        this.fetchNewCommentsTaskId = window.setInterval(this.fetchNewComments, 30000);
        this.fetchNewComments();
    }

    componentWillUnmount() {
        window.clearInterval(this.fetchNewCommentsTaskId);
    }


    render() {
        return (
            <>
                <Row>
                    <Col>
                        <CardColumns>
                            <Card border="white" className="card">
                                <Card.Body>
                                    <Form postComment={this.postComment} canSubmit={this.state.canSubmit} />
                                </Card.Body>
                            </Card>
                            {
                                this.state.comments.length > 0 && this.state.comments.map((x) =>
                                    <Card key={x.id} border="white" className="card">
                                        <Card.Body>
                                            <Comment {...x} />
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </CardColumns>
                    </Col>
                </Row>
            </>
        );
    }
}

Chat.contextType = AppContext;

export default Chat;