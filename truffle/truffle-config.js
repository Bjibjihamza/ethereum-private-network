const Web3 = require("web3");
const net = require("net");
const path = require("path");

const ipcPath = path.resolve(
  __dirname,
  "../blockchain/node1/geth.ipc"
);

module.exports = {
  networks: {
    private: {
      provider: () => new Web3.providers.IpcProvider(
        ipcPath,
        net
      ),
      network_id: 2026,
      from: "0x473DB20274Ce0593652BF1D3d2dB0A6A7e2b5EC8",
      gas: 3000000,
      gasPrice: 2000000000
    }
  },

  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "london"
      }
    }
  }
};
