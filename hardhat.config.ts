import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
    solidity: {
        version: '0.8.25',
    },
    settings: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        goerli: {
            url: `https://ethereum-goerli.publicnode.com`,
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 5,
        },
        sepolia: {
            url: `https://ethereum-sepolia.blockpi.network/v1/rpc/public`,
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 11155111,
        },
        mainnet: {
            url: `https://eth-pokt.nodies.app`,
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 1,
        },
        bsc: {
            url: `https://binance.llamarpc.com`,
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 56,
        },
    },
    etherscan: {
        apiKey: {
            goerli: `${process.env.ETHERSCAN_API_KEY}`,
            mainnet: `${process.env.ETHERSCAN_API_KEY}`,
            arbitrumOne: `${process.env.ARBISCAN_API_KEY}`,
            sepolia: `${process.env.SEPOLIA_API_KEY}`,
            bsc: `${process.env.BSCSCAN_API_KEY}`,
        },
    },
};
