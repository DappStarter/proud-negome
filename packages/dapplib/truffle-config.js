require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign street crawl oval unit gown light army genuine'; 
let testAccounts = [
"0x77644d8e530ae3f367c8b168844fe0bff0855a0e377382cbf096882a193e1242",
"0xbc9d0ef77df48e6e640c49016f2ac893bd253ac7d86ae14d9a43afec272a3f12",
"0xca1342da54308cbfba4824e598a8e77871106b4f51c0115b292bec507d5ab831",
"0x6f6bcb5525f3b2586c1ed6ceaea8b97da0679177daa4d3f2e0d68a986bde8118",
"0x732879c999a32f34c96e80898af51cf64a96b2dadff4fba8070cb962f1ddf2a9",
"0xec18633e9c59c91fc4ba5baae850d3d3184d2ffea25386f8e1283d37f1ae364c",
"0xf6e842f95ad6d5a09b36e6295e6011514f1166602377230fe80fb7bf0dc08a07",
"0x49e4b58b9dce5c8a73f33b849b194631f4a7165ed09e7220ebc4f4fbe8a73506",
"0x2528707fd1cd052d65e3fb932875241652caff30841f98ee626deee4de13acc2",
"0xab8e142f6dd84d480951e820867de11a051c35c8d9e39596d71852c88a9af9ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

