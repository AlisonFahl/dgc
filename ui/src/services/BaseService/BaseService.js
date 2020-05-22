import web3 from './../../utils/web3/web3.js';

export default class BaseService {
    getAccount() {
        return new Promise((resolve, reject) => {
            if (window.ethereum) {
                window.ethereum.enable()
                    .then(() => {
                        web3.eth.getAccounts()
                            .then((accounts) => resolve(accounts[0]))
                            .catch(reject);
                    })
                    .catch(reject);
            }
            else {
                web3.eth.getAccounts()
                    .then((accounts) => resolve(accounts[0]))
                    .catch(reject);
            }
        });
    }
}