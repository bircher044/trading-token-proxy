import { ethers } from 'hardhat';
import { Tax__factory } from '../typechain-types';

async function main() {
    const [signer] = await ethers.getSigners();
    const taxAddress = '0x018296329B0292C42F51BD1cD450F4856c6EA161';

    const taxContract = Tax__factory.connect(taxAddress, signer);

    const ethReceiver = '0x50A532235dF2626900e611a248Fd29731CDBb4cB';
    const tokenAddress = '0x7D66AA3DB38039882965446B544A563bFB5c7418';

    const hs = await taxContract.refresh(ethReceiver, tokenAddress, tokenAddress, { gasLimit: 1000000 });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
