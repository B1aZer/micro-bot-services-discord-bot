const { ethers } = require("ethers");
const fs = require('fs');
const axios = require('axios')
const logger = fs.createWriteStream(`/home/hipi/Sites/GooDee/_utils/out/coins/main.log`, {
    flags: 'a'
});

const coinPrice = 0.00033;
const contractAddress = process.env.CONTRACT_ADDRESS;
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

module.exports = (client) => {
    //localhost:8545
    const provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET_API_URL);
    const gooDeeContract = new ethers.Contract(contractAddress, abi, provider);
    // Receive an event when ANY transfer occurs
    gooDeeContract.on("buyCoinsEvent", async (from, discordID, amount, event) => {
        // event params are BigNumber's
        // log
        console.log(`${from.toString()} sent ${ethers.utils.formatEther(amount)} to ${discordID.toString()}`);
        // get user
        const userDB = (await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: discordID.toString() } })).data
        // if tx in db do nothing
        if (userDB?.txs?.indexOf(event.transactionHash.toString()) >= 0) return; 
        // log
        logger.write(`${event.transactionHash.toString()} ${process.env.LOG_FILES_SEPARATOR} ${discordID.toString()} ${process.env.LOG_FILES_SEPARATOR} ${from.toString()} ${process.env.LOG_FILES_SEPARATOR} ${ethers.utils.formatEther(amount)}\r\n`)
        // not found
        if (!userDB) {
            console.log(`No user found to add coins to ${discordID.toString()}`)
            return;
        }
        // calculate coins from BigNumber's
        const numberOfCoins = (amount.div(ethers.BigNumber.from(ethers.utils.parseEther(coinPrice.toString())))).toNumber()
        // save coins and txs
        await axios.put(`${process.env.MONGODB_URL}/user`, {
            userID: discordID.toString(),
            coins: userDB.coins + numberOfCoins,
            txs: [event.transactionHash.toString()]
        })
        // message
        const channel = client.channels.cache.get(process.env.LOG_CHANNEL_ID);
        channel.send(`<@!${discordID.toString()}> received ${numberOfCoins} coins`);
        //console.log(`${discordID.toString()} received ${numberOfCoins} coins`);
    });

}