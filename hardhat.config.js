/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const { API_URL_MUMBAI, API_URL_MAINNET, API_URL_ROPSTEN, PRIVATE_KEY } =
  process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: `${API_URL_ROPSTEN}`,
      accounts: [PRIVATE_KEY]
      //0x1dc8a53BD8Ab22fB5396e71ADA3c737000aFD30A
    },
    mumbai: {
      url: `${API_URL_MUMBAI}`,
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: `${API_URL_MAINNET}`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.8.4"
};
