const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

const provider = ganache.provider();
const web3 = new Web3(provider);

describe("Chat", () => {
    let accounts;
    let chat;

    beforeEach(async () => {
        // Get a list of all accounts
        accounts = await web3.eth.getAccounts();

        // Deploy contract to one of the accounts
        chat = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode, arguments: [] })
            .send({ from: accounts[0], gas: "1000000" });

        chat.setProvider(provider);
    });

    it("deploy contract", () => {
        assert.ok(chat.options.address);
    });

    describe("post method", () => {
        it("should post with success", async () => {
            const message = "Hello World";
            const alias = "Alias";

            await chat.methods.post(message, alias).send({ from: accounts[0], gas: "1000000" });

            const postedMessage = await chat.methods.messages(0).call();

            assert.equal(message, postedMessage.message);
            assert.equal(alias, postedMessage.senderAlias);
            assert.equal(accounts[0], postedMessage.sender);
        });

        it("posting message longer than 280 characters should be rejected", async () => {
            const message = "a".repeat(281);

            try {
                await chat.methods.post(message, "").send({ from: accounts[0], gas: "1000000" })
                assert(false);
            }
            catch (e) {
                assert(true);
            }
        });

        it("posting alias longer than 30 characters should be rejected", async () => {
            const message = "a";
            const alias = "a".repeat(31);

            try {
                await chat.methods.post(message, alias).send({ from: accounts[0], gas: "1000000" });
                assert(false);
            }
            catch (e) {
                assert(true);
            }
        });
    });

    describe("getTotalMessages method", () => {
        it("should return total messages", async () => {
            assert.equal(0, await chat.methods.getTotalMessages().call());
        });
    });
});