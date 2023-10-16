pragma solidity ^0.6.0;

interface IJoeV2Callee {
    function JoeV2Call(
        address sender,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external;
}
