import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./contract";

function App() {

  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  async function connectWallet() {

    const provider =
      new ethers.BrowserProvider(window.ethereum);

    const accounts =
      await provider.send(
        "eth_requestAccounts",
        []
      );

    setAccount(accounts[0]);
  }

  async function stakeETH() {

    const provider =
      new ethers.BrowserProvider(window.ethereum);

    const signer =
      await provider.getSigner();

    const contract =
      new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        signer
      );

    const tx =
      await contract.stake({
        value: ethers.parseEther(amount)
      });

    await tx.wait();

    alert("Stake Successful");
  }

  async function withdrawETH() {

    const provider =
      new ethers.BrowserProvider(window.ethereum);

    const signer =
      await provider.getSigner();

    const contract =
      new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        signer
      );

    const tx =
      await contract.withdraw(
        ethers.parseEther(amount)
      );

    await tx.wait();

    alert("Withdraw Successful");
  }

  async function checkBalance() {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const userAddress = await signer.getAddress();

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      provider
    );

    const bal = await contract.balances(userAddress);

    setBalance(
      ethers.formatEther(bal)
    );

    console.log(
      "Balance:",
      ethers.formatEther(bal)
    );

  } catch (error) {
    console.error(error);
  }
}

  return (
    <div style={{padding:"20px"}}>

      <h1>🔒 Staking DApp</h1>

      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      <p>{account}</p>

      <input
        placeholder="ETH Amount"
        onChange={(e)=>
          setAmount(e.target.value)
        }
      />

      <br/><br/>

      <button onClick={stakeETH}>
        Stake
      </button>

      <button onClick={withdrawETH}>
        Withdraw
      </button>

      <button onClick={checkBalance}>
        Check Balance
      </button>

      <h3>
        Staked Balance: {balance} ETH
      </h3>
        <p>Connected Wallet: {account}</p>

<p>Contract: {CONTRACT_ADDRESS}</p>
    </div>
  );
}

export default App;