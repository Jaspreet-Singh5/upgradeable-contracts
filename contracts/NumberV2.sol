pragma solidity ^0.8.28;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";  
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract NumberV2 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    // state variables
    uint256 public number;

    function initialize(uint256 _number) public initializer {
        __Ownable_init(msg.sender);
        number = _number;
    }

    function incrementNumber() external { 
        number += 2;
    }

    function _authorizeUpgrade(address) internal override onlyOwner { }
}
