import contract from './../../contracts/Chat.js';
import BaseService from './../BaseService/BaseService.js';

export default class ChatService extends BaseService{
    postMessage(message, alias) {
        return contract.methods
            .post(message, alias)
            .send({
                from: this.getAccount(),
            });
    }

    getTotalMessages() {
        return contract.methods
            .getTotalMessages()
            .call();
    }

    getMessage(index) {
        return contract.methods
            .messages(index)
            .call();
    }
}