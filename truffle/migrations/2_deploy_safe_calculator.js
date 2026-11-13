const SafeCalculator = artifacts.require("SafeCalculator");

module.exports = function (deployer) {
  deployer.deploy(SafeCalculator);
};
