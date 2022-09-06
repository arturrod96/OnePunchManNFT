require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.1',
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: [process.env.ETHERSACN_API_KEY],
  }
};
