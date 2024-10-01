import { Web3 } from 'web3';

// Set up a connection to the Ganache network
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth.llamarpc.com'));
/* NOTE:
instead of using ganache, you can also interact with a testnet/mainnet using another provider
https://app.infura.io/
https://dashboard.alchemy.com/
or use a public provider https://chainlist.org/
*/

// Log the current block number to the console
const block = await web3.eth.getBlockNumber();

console.log('Last block:', block);
// ↳ Last block: 4975299n