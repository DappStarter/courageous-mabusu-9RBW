require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant hope arch outer tower'; 
let testAccounts = [
"0xb7b2ad41ca2a31dd9047683885fe008569b495861ae6c63c011bdc7fc35bf9bf",
"0x64ef921b6a5de83d850463c39988965c2efe049200fef4c92354cdadcf4fae8c",
"0x7831c61b9d7825b6f60b4e7346560335e6651952d04dc8412116d76f23fbd181",
"0x94db97754f39915893d6058537dc96ccd795229fb35c9830b11251b1591b8631",
"0xa95724f55841213daa6fb8c22b98bd374ebe4ff081cf134036b122710123c940",
"0xd09fa36461ae72b1530d14dfc6ad97dd1eb88307600c5fcc1d2f28e156dfa7d2",
"0x5195e4e85bad518a85e9e6897b930afc81f73b55210bc0c66e286cfdbc1fb635",
"0x75f4e932e5163c93694f938e1ecd4a480bdab69681aea5398583aef56cfb53b6",
"0x4dc5edfda5ef36a82d6125111bd90742442d34e34fa3f7a67ffe860b19fc2e3f",
"0x35465346df648f540b7b7e7c4e857bc986e98e8618ebee6427046bfcee87a3c4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

