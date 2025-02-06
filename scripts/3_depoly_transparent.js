const { ethers } = require('hardhat');

const main = async () => {
    const transparent = await ethers.getContractFactory('Transparent');
    const Transparent = await transparent.deploy();

    console.log(`transparent proxy deployed: ${await Transparent.getAddress()}`);
}

main()
    .catch(err => {
        console.error(err);
    })
