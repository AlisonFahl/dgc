import Web3 from 'web3';

export default (function () {
    // Modern dapp browsers...
    if (window.ethereum) {
        return setupWithDefaultProvider(window.ethereum);
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        return setupWithDefaultProvider(window.web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        return setupWithHttpProvider()
    }
})();

function setupWithDefaultProvider(provider) {
    return new Web3(provider);
}

function setupWithHttpProvider() {
    return new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_WEB3_API_ADDRESS));
}