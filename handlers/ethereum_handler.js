const { ethers } = require("ethers");
const fs = require('fs');
const logger = fs.createWriteStream(`/home/hipi/Sites/GooDee/_utils/out/coins/main.log`, {
    flags: 'a'
});

const coinPrice = 0.00033;
const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "discordId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountPayed",
                "type": "uint256"
            }
        ],
        "name": "buyCoinsEvent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "discordId",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

module.exports = async (client) => {
    //localhost:8545
    const provider = new ethers.providers.JsonRpcProvider();
    const gooDeeContract = new ethers.Contract(contractAddress, abi, provider);
    // Receive an event when ANY transfer occurs
    gooDeeContract.on("buyCoinsEvent", (from, discordID, amount, event) => {
        console.log(`${from} sent ${ethers.utils.formatEther(amount)} to ${discordID}`);
        logger.write(`${event.transactionHash} ${process.env.LOG_FILES_SEPARATOR} ${discordID} ${process.env.LOG_FILES_SEPARATOR} ${from} ${process.env.LOG_FILES_SEPARATOR} ${ethers.utils.formatEther(amount)}\r\n`)
    });

}