// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Fearg {

    uint age;

    constructor(uint _age) {
        age = _age;
    }

    function setAge(uint _age) public {
        age = _age;
    }

    function getAge() public view returns (uint) {
        return age;
    }

}