const  { ethers, upgrades } = require("hardhat");

const PROXY = "0x6c2C0EAFc7EA8646799a0d7C321C382ce77fF537";
 
const main = async () => {
    const NumberV2 = await ethers.getContractFactory("NumberV2");

    console.log("Upgrading number contract to V2");
    await upgrades.upgradeProxy(PROXY, NumberV2);
    console.log("Number contract upgraded successfully");
}

main()
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
