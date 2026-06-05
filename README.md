# DeFi Staking Platform

## Project Overview

The DeFi Staking Platform is a decentralized application (DApp) that allows users to connect their MetaMask wallet, stake ETH, withdraw staked funds, view staking balances, and calculate rewards through a Solidity smart contract deployed on the blockchain.

This project demonstrates the integration of blockchain technology with a modern React frontend using Ethers.js and MetaMask.

## Features

* Connect MetaMask Wallet
* Stake ETH
* Withdraw Staked ETH
* Check Staking Balance
* Calculate Staking Rewards
* Smart Contract Integration
* Blockchain Network Interaction
* Responsive User Interface

## Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Blockchain

* Solidity
* SCAI Mainnet

### Web3 Integration

* Ethers.js
* MetaMask

### Deployment

* GitHub
* Vercel

## Smart Contract Functions

### stake()

Allows users to stake ETH into the platform.

### withdraw(uint256 amount)

Allows users to withdraw their staked ETH.

### getBalance(address user)

Returns the user's staking balance.

### calculateReward(address user)

Calculates reward as 10% of the staked balance.

### claimReward()

Returns the estimated reward amount.

## 🔄 Application Workflow

```text
User
 ↓
Connect Wallet
 ↓
Stake ETH
 ↓
Balance Updated
 ↓
Reward Calculated
 ↓
Withdraw ETH
 ↓
Balance Updated
```

## Live Deployment

### Vercel

https://de-fi-staking-platform.vercel.app/

## GitHub Repository

https://github.com/mummanavasanthi/DeFi_Staking_Platform

## Testing

The following functionalities were tested successfully:

* Wallet Connection 
* ETH Staking 
* ETH Withdrawal 
* Balance Retrieval 
* Reward Calculation 
* Smart Contract Interaction 

## Security Features

* Input Validation using require()
* Balance Verification before Withdrawal
* Solidity 0.8.x Overflow Protection
* MetaMask Authentication
* Secure Blockchain Transactions

## Documentation

Detailed project documentation is available in the `docs` folder:

* Requirements & Use Cases
* System Architecture
* Smart Contract Development
* Frontend Integration
* Wallet Integration
* Blockchain Integration
* Unit Testing
* Security Testing
* Gas Optimization
* Mainnet Deployment

## Future Enhancements

* WalletConnect Integration
* Coinbase Wallet Support
* Claimable Rewards System
* Time-Based Reward Distribution
* Multi-Token Staking
* Advanced Dashboard Analytics

The DeFi Staking Platform successfully demonstrates blockchain-based staking functionality through smart contracts and a React frontend. The project integrates MetaMask, Ethers.js, Solidity, and SCAI Mainnet to provide a secure and user-friendly decentralized staking experience.
