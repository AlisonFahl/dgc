import contract from './../../contracts/Chat.js';
import BaseService from './../BaseService/BaseService.js';

export default class ChatService extends BaseService{
    postMessage(message, alias) {
        return new Promise((resolve, reject) => {
            this.getAccount()
                .then((account) => {
                    contract.methods
                        .post(message, alias)
                        .send({
                            from: account,
                        })
                        .then(resolve)
                        .catch(reject);
                })
                .catch(reject);
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