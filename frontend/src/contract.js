export const CONTRACT_ADDRESS =
"0x5464C15c05fF36902C66e836232525Af0904c611";

export const ABI = [
  "function stake() payable",
  "function withdraw(uint256 amount)",
  "function getBalance(address user) view returns(uint256)",
  "function calculateReward(address user) view returns(uint256)",
  "function claimReward() view returns(uint256)"
];