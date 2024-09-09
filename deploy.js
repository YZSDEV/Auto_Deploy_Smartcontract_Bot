require('dotenv').config();
const { ethers } = require('ethers');

// Setup provider and wallet
const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Smart contract ABI and Bytecode
const abi = [YOUR_ABI_SMARTCONTRACT];

const bytecode = 'YOUR BYTECODE_SMARTCONTRACT';

async function deployContract() {
  console.log('Deploying contract...');
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy();

  console.log('Waiting for contract to be mined...');
  await contract.waitForDeployment();

  console.log(`Contract deployed at address: ${contract.address}`);
}

async function main() {
  while (true) {
    try {
      await deployContract();
      console.log('Waiting for 1 minute...');
      await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 1 minute
    } catch (error) {
      console.error('Error deploying contract:', error);
      // Optionally, you could add a delay here to avoid rapid retry on failure
      await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 1 minute
    }
  }
}

main().catch(console.error);
