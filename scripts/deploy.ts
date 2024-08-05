import { ethers } from "hardhat";
//import {  } from "../typechain-types";

async function main() {
    const [signer] = await ethers.getSigners();
    // const token = await new NatureRex__factory(signer).deploy(liquidity, marketing, ecoFunds, community, cexReserve, reserveFund);
    // console.log(`CA: ${await token.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});