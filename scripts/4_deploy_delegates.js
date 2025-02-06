const { ethers } = require("hardhat");

const main = async () => {
    const delegate1 = await ethers.getContractFactory('Delegate1');
    const Delegate1 = await delegate1.deploy();

    console.log(`delegate1 deployed at: ${await Delegate1.getAddress()}`);

    const delegate2 = await ethers.getContractFactory('Delegate2');
    const Delegate2 = await delegate2.deploy();

    console.log(`Delegate2 deployed at: ${await Delegate2.getAddress()}`);
}

main()
    .catch(err => console.error(err));
