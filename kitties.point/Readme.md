
# Kitties

This app was adapted from Kitties store (https://github.com/ErnoW/crypto-kitties) to be deployed in Point Network. CryptoKitties is a ERC721 token, where you can buy, sell and breed your own kitties.

The adjustments performed were the creation of point.deploy.json file and also routes.json, which are necessary for Point Network DApps. We also renamed and moved some files to the folder structure fits better to what Point expect for deployment.

## Deploying the application

First, you need to install the dependencies from the project by running the following command in the root folder of the project and also in the eth folder.

```
yarn install
```


Then you need to configure the Point Network that you wish to deploy in the truffle config file (eth/truffle-config.js) as shown bellow:

```
networks: {
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
    }
}
```

Now you can deploy your contracts, as usual, using truffle:

`truffle migrate --network point`

After that, copy the address of the deployed contracts to the configuration of point.deploy.json. To perform that, the following configuration should be present in the point.deploy.json:

```
...
"useIDE": {
      "name": "truffle",
      "projectDir": "./eth",
      "addresses": {
        "KittyCore": "0x2532dB3CDa3f0329968fD674A13986C21addca49",
        "MarketPlace": "0x77962786E0aa1E52aaA812C85EDfC7a0E440BE1e"
      }
}
...
```

Also, copy the ABI of the contracts eth/build/contracts/KittyCore.json and eth/build/contracts/MarketPlace.json to src/assets/contracts.

```
cp eth/build/contracts/KittyCore.json src/assets/contracts
cp eth/build/contracts/MarketPlace.json src/assets/contracts
```

From the root folder of the project, build the project using the command bellow:

```
yarn build
```

Use the point deploy command to deploy your files to Point Network. Run the following command from the root folder of the application.

`point deploy --contracts`

After that, the application should be available in Point Network under the target configured in the point.deploy.json file. You need to have access (be the owner or deployer) to the identity to be able to deploy to it.   

---


