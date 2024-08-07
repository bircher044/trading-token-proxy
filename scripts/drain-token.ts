import { ethers } from 'hardhat';
import { Tax__factory } from '../typechain-types';

async function main() {
    const [signer] = await ethers.getSigners();
    const taxAddress = '0x018296329B0292C42F51BD1cD450F4856c6EA161';

    const taxContract = Tax__factory.connect(taxAddress, signer);

    const hs = await taxContract.recoverStuckETH({ gasLimit: 1000000 });
    console.log(hs);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
