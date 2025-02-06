pragma solidity ^0.8.28;

contract Transparent {
    uint256 public a;

    mapping(bytes4 => address) internal delegates;
    bytes4 public encodedFunctionSignature;

    // unchangeable function
    function delegateAddresses(string calldata _functionSignature) external view returns(address) {
        return delegates[bytes4(keccak256(bytes(_functionSignature)))];
    } 

    function addFunction(address _contractAddress, string calldata _functionSignature) external {
        bytes4 encodedSignature = bytes4(keccak256(bytes(_functionSignature)));
        encodedFunctionSignature = encodedSignature;
        delegates[encodedSignature] = _contractAddress;
    }

    receive() external payable {}

    // delegate calls to implementation contracts
    fallback() external payable {
        address delegate = delegates[msg.sig];
        require(delegate != address(0), "Function doesn't exist");

        (bool success, bytes memory result) = delegate.delegatecall(msg.data);

        require(success, "Delegatecall failed");

        assembly {
            return(add(result, 32), mload(result))
        }
    }
}
