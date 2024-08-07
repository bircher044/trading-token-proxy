import { ethers } from 'hardhat';
import { Token__factory } from '../typechain-types';

async function main() {
    const [signer] = await ethers.getSigners();
    const v2Router = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
    const taxContract = '';

    const tax = await new Token__factory(signer).deploy(v2Router, taxContract);

    console.log(`CA: ${await tax.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
