require("@nomicfoundation/hardhat-toolbox");

// require("@nomiclabs/hardhat-waffle");

require('dotenv').config();


const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  paths: {
    artifacts: "./src/artifacts",
  },


  networks: {
    hardhat: {
      chainId: 1337
    //},
    },

    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  }


};
