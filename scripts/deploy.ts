import { ethers } from "hardhat";
import { Tax__factory } from "../typechain-types";

async function main() {
    const [signer] = await ethers.getSigners();
    const tax = await new Tax__factory(signer).deploy();

    console.log(`CA: ${await tax.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});