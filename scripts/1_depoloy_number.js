const { ethers, upgrades } = require("hardhat");

const initialNumber = 1;

async function main() {
    const NumberV1 = await ethers.getContractFactory('NumberV1');

    const numberV1 = await upgrades.deployProxy(NumberV1, [initialNumber], {
        initializer: "initialize"
    });

    await numberV1.waitForDeployment();

    console.log(`numberV1 deployed to: ${await numberV1.getAddress()}`);
} 

main();
