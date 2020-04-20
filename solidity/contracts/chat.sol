pragma solidity ^0.4.25;

contract Chat {
    struct Message {
    	string message;
    	address sender;
    	string senderAlias;
    	uint timestamp;
    }

	Message[] public messages;

	function post(string memory message, string memory _alias) public {
		require(bytes(message).length <= 280);
		require(bytes(_alias).length <= 30);

		messages.push(Message({
			message: message,
			sender: msg.sender,
			senderAlias: _alias,
			timestamp: now
		}));
	}

	function getTotalMessages() public view returns(uint) {
		return messages.length;
	}
}