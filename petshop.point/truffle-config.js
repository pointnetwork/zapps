const HDWalletProvider = require("@truffle/hdwallet-provider");
const homedir = require('os').homedir();
const wallet = require('ethereumjs-wallet')
  .hdkey.fromMasterSeed(
    require('bip39').mnemonicToSeedSync(
      require(require('path').resolve(
        homedir,
        '.point',
        'keystore',
        'key.json'
      )).phrase
    )
  )
  .getWallet();
const privateKey = wallet.getPrivateKey().toString('hex');


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },  
    point: {
        network_id: "10687", 
        gasPrice: 7,
        provider: function() {
          return new HDWalletProvider({
              providerOrUrl: "https://rpc-mainnet-1.point.space",
              privateKeys: [privateKey]
            }
          );
        }
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    }
  }
};
