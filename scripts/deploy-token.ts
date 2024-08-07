import { ethers } from 'hardhat';
import { Token__factory } from '../typechain-types';

async function main() {
    const [signer] = await ethers.getSigners();
    const v2Router = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
    const taxContract = '0x018296329B0292C42F51BD1cD450F4856c6EA161';

    const tax = await new Token__factory(signer).deploy(v2Router, taxContract, { gasLimit: 10000000 });

    console.log(`CA: ${await tax.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
