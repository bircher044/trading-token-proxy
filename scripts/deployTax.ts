import { ethers } from 'hardhat';
import { Tax__factory } from '../typechain-types';

async function main() {
    const [signer] = await ethers.getSigners();
    const v2Router = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
    const tax = await new Tax__factory(signer).deploy(v2Router);

    console.log(`CA: ${await tax.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
