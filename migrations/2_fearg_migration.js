// artifacts.require() pull in a contract and wrap it in a contract abstraction
// "Fearg" is not the name of the source file; it's the keyword signifying the contracts name 
// important becaause there can be multiple cotnracts in the same .sol file
const Fearg = artifacts.require("Fearg");

// module.exports needs to export single function
// deployer is truffle function for deploying
// the function can take more parameters for more specific deployment configuration
// second argument after abstraction is the constuctor arg
module.exports = function (deployer) {
  deployer.deploy(Fearg, 27);
};
