// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Staking {

    mapping(address => uint256) public balances;

    function stake() public payable {
        require(msg.value > 0, "Send ETH");
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;

        payable(msg.sender).transfer(amount);
    }

    function getBalance(address user)
        public
        view
        returns(uint256)
    {
        return balances[user];
    }
}