const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    process.env.WALLET_MNEMONIC,
    process.env.NETWORK_PROVIDER,
);

const web3 = new Web3(provider);

(async () => {
    // Get a list of all accounts
    const accounts = await web3.eth.getAccounts();

    console.log(`Attempting to deploy from account ${accounts[0]}`);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: "0x" + bytecode, arguments: [] })// https://stackoverflow.com/questions/50201353/unhandledpromiserejectionwarning-error-the-contract-code-couldnt-be-stored-p
        .send({ from: accounts[0], gas: "1000000" });

    console.log(result.options.address);
})();