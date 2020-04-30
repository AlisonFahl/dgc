import web3 from './../utils/web3/web3.js';

const address = process.env.REACT_APP_CHAT_CONTRACT_ADDRESS;

const abi = [{ "constant": false, "inputs": [{ "name": "message", "type": "string" }, { "name": "_alias", "type": "string" }], "name": "post", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "messages", "outputs": [{ "name": "message", "type": "string" }, { "name": "sender", "type": "address" }, { "name": "senderAlias", "type": "string" }, { "name": "timestamp", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getTotalMessages", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];

export default new web3.eth.Contract(abi, address);