import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./contract";

function App() {

  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [reward, setReward] = useState("");

  async function connectWallet() {
    try {

      const provider =
        new ethers.BrowserProvider(window.ethereum);

      const accounts =
        await provider.send(
          "eth_requestAccounts",
          []
        );

      setAccount(accounts[0]);

    } catch (error) {
      console.error(error);
    }
  }

  async function stakeETH() {
    try {

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

      await checkBalance();
      await checkReward();

    } catch (error) {

      console.error(error);

      alert("Stake Failed");

    }
  }

  async function withdrawETH() {
    try {

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

      await checkBalance();
      await checkReward();

    } catch (error) {

      console.error(error);

      alert("Withdraw Failed");

    }
  }

  async function checkBalance() {
    try {

      const provider =
        new ethers.BrowserProvider(window.ethereum);

      const signer =
        await provider.getSigner();

      const userAddress =
        await signer.getAddress();

      const contract =
        new ethers.Contract(
          CONTRACT_ADDRESS,
          ABI,
          provider
        );

      const bal =
        await contract.getBalance(
          userAddress
        );

      setBalance(
        ethers.formatEther(bal)
      );

    } catch (error) {

      console.error(error);

    }
  }

  async function checkReward() {
    try {

      const provider =
        new ethers.BrowserProvider(window.ethereum);

      const signer =
        await provider.getSigner();

      const userAddress =
        await signer.getAddress();

      const contract =
        new ethers.Contract(
          CONTRACT_ADDRESS,
          ABI,
          provider
        );

      const rew =
        await contract.calculateReward(
          userAddress
        );

      setReward(
        ethers.formatEther(rew)
      );

    } catch (error) {

      console.error(error);

    }
  }

  const btnStyle = {
    margin: "5px",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#38bdf8",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.4)"
        }}
      >
        <h1
            style={{
              marginBottom: "20px",
              color: "#38bdf8",
              fontSize: "2rem",
              whiteSpace: "nowrap"
            }}
          >
          Staking Platform
        </h1>

        <button
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          Connect Wallet
        </button>

        <p>
          <strong>Connected Wallet</strong>
        </p>

        <p
          style={{
            wordBreak: "break-all",
            fontSize: "14px",
            color: "#cbd5e1"
          }}
        >
          {account}
        </p>

        <input
          type="text"
          placeholder="Enter ETH Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none"
          }}
        />

        <div
          style={{
            marginTop: "20px"
          }}
        >
          <button
            onClick={stakeETH}
            style={btnStyle}
          >
            Stake
          </button>

          <button
            onClick={withdrawETH}
            style={btnStyle}
          >
            Withdraw
          </button>

          <button
            onClick={checkBalance}
            style={btnStyle}
          >
            Check Balance
          </button>

          <button
            onClick={checkReward}
            style={btnStyle}
          >
            Check Reward
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            background: "#334155",
            borderRadius: "15px"
          }}
        >
          <h3>💰 Staked Balance</h3>

          <h2>
            {balance || "0"} ETH
          </h2>
        </div>

        <div
          style={{
            marginTop: "15px",
            padding: "15px",
            background: "#334155",
            borderRadius: "15px"
          }}
        >
          <h3>🎁 Reward Balance</h3>

          <h2>
            {reward || "0"} ETH
          </h2>
        </div>

        <div
          style={{
            marginTop: "20px"
          }}
        >
          <p>
            <strong>Contract Address</strong>
          </p>

          <p
            style={{
              wordBreak: "break-all",
              fontSize: "13px",
              color: "#cbd5e1"
            }}
          >
            {CONTRACT_ADDRESS}
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;