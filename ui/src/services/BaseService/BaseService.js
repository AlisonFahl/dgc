import web3 from './../../utils/web3/web3.js';

export default class BaseService {
    getAccount() {
        if (!web3.eth.defaultAccount) {
            web3.currentProvider.enable().then(() => {
                return web3.eth.defaultAccount;
            });
        }
        else {
            return web3.eth.defaultAccount;
        }
    }
}