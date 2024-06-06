/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * Hands-off deployment with Infura
 * --------------------------------
 *
 * Do you have a complex application that requires lots of transactions to deploy?
 * Use this approach to make deployment a breeze 🏖️:
 *
 * Infura deployment needs a wallet provider (like @truffle/hdwallet-provider)
 * to sign transactions before they're sent to a remote public node.
 * Infura accounts are available for free at 🔍: https://infura.io/register
 *
 * You'll need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. You can store your secrets 🤐 in a .env file.
 * In your project root, run `$ npm install dotenv`.
 * Create .env (which should be .gitignored) and declare your MNEMONIC
 * and Infura PROJECT_ID variables inside.
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 *
 * Are you concerned about security and minimizing rekt status 🤔?
 * Use this method for best security:
 *
 * Truffle Dashboard lets you review transactions in detail, and leverages
 * MetaMask for signing, so there's no need to copy-paste your mnemonic.
 * More details can be found at 🔎:
 *
 * https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/
 */

// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    //
    // An additional network, but with some advanced options…
    // advanced: {
    //   port: 8777,             // Custom port
    //   network_id: 1342,       // Custom network
    //   gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    //   gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    //   from: <address>,        // Account to send transactions from (default: accounts[0])
    //   websocket: true         // Enable EventEmitter interface for web3 (default: false)
    // },
    //
    // Useful for deploying to a public network.
    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
    // goerli: {
    //   provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
    //   network_id: 5,       // Goerli's id
    //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    //
    // Useful for private networks
    // private: {
    //   provider: () => new HDWalletProvider(MNEMONIC, `https://network.io`),
    //   network_id: 2111,   // This network is yours, in the cloud.
    //   production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
const VotingSystem = artifacts.require("VotingSystem");

// Replace the following placeholders with your actual contract's ABI and bytecode
 VotingSystem = [ [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getCandidate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			}
		],
		"name": "isRegistered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredVoters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]];
const VotingSystemBytecode = "608060405234801561000f575f80fd5b50610e968061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610091575f3560e01c806335b8e8201161006457806335b8e82014610131578063462e91ec14610163578063a9ff6df11461017f578063c3c5a547146101af578063ecb617d9146101df57610091565b80630121b93f1461009557806309eef43e146100b157806330a56347146100e15780633477ee2e146100ff575b5f80fd5b6100af60048036038101906100aa91906106e2565b6101e9565b005b6100cb60048036038101906100c69190610767565b61034a565b6040516100d891906107ac565b60405180910390f35b6100e9610367565b6040516100f691906107d4565b60405180910390f35b610119600480360381019061011491906106e2565b610373565b60405161012893929190610877565b60405180910390f35b61014b600480360381019061014691906106e2565b61042e565b60405161015a93929190610877565b60405180910390f35b61017d600480360381019061017891906109df565b610566565b005b61019960048036038101906101949190610767565b6105db565b6040516101a691906107ac565b60405180910390f35b6101c960048036038101906101c49190610767565b6105f7565b6040516101d691906107ac565b60405180910390f35b6101e7610648565b005b60025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1615610273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026a90610a70565b60405180910390fd5b60018054905081106102ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b190610ad8565b60405180910390fd5b600181815481106102ce576102cd610af6565b5b905f5260205f2090600302016002015f8154809291906102ed90610b50565b9190505550600160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555050565b6002602052805f5260405f205f915054906101000a900460ff1681565b5f600180549050905090565b60018181548110610382575f80fd5b905f5260205f2090600302015f91509050805f0154908060010180546103a790610bc4565b80601f01602080910402602001604051908101604052809291908181526020018280546103d390610bc4565b801561041e5780601f106103f55761010080835404028352916020019161041e565b820191905f5260205f20905b81548152906001019060200180831161040157829003601f168201915b5050505050908060020154905083565b5f60605f6001805490508410610479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047090610ad8565b60405180910390fd5b5f6001858154811061048e5761048d610af6565b5b905f5260205f2090600302016040518060600160405290815f82015481526020016001820180546104be90610bc4565b80601f01602080910402602001604051908101604052809291908181526020018280546104ea90610bc4565b80156105355780601f1061050c57610100808354040283529160200191610535565b820191905f5260205f20905b81548152906001019060200180831161051857829003601f168201915b505050505081526020016002820154815250509050805f015181602001518260400151935093509350509193909250565b6001604051806060016040528060018054905081526020018381526020015f815250908060018154018082558091505060019003905f5260205f2090600302015f909190919091505f820151815f015560208201518160010190816105cb9190610d91565b5060408201518160020155505050565b5f602052805f5260405f205f915054906101000a900460ff1681565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b60015f803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b6106c1816106af565b81146106cb575f80fd5b50565b5f813590506106dc816106b8565b92915050565b5f602082840312156106f7576106f66106a7565b5b5f610704848285016106ce565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6107368261070d565b9050919050565b6107468161072c565b8114610750575f80fd5b50565b5f813590506107618161073d565b92915050565b5f6020828403121561077c5761077b6106a7565b5b5f61078984828501610753565b91505092915050565b5f8115159050919050565b6107a681610792565b82525050565b5f6020820190506107bf5f83018461079d565b92915050565b6107ce816106af565b82525050565b5f6020820190506107e75f8301846107c5565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610824578082015181840152602081019050610809565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610849826107ed565b61085381856107f7565b9350610863818560208601610807565b61086c8161082f565b840191505092915050565b5f60608201905061088a5f8301866107c5565b818103602083015261089c818561083f565b90506108ab60408301846107c5565b949350505050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6108f18261082f565b810181811067ffffffffffffffff821117156109105761090f6108bb565b5b80604052505050565b5f61092261069e565b905061092e82826108e8565b919050565b5f67ffffffffffffffff82111561094d5761094c6108bb565b5b6109568261082f565b9050602081019050919050565b828183375f83830152505050565b5f61098361097e84610933565b610919565b90508281526020810184848401111561099f5761099e6108b7565b5b6109aa848285610963565b509392505050565b5f82601f8301126109c6576109c56108b3565b5b81356109d6848260208601610971565b91505092915050565b5f602082840312156109f4576109f36106a7565b5b5f82013567ffffffffffffffff811115610a1157610a106106ab565b5b610a1d848285016109b2565b91505092915050565b7f596f75206861766520616c726561647920766f7465642e0000000000000000005f82015250565b5f610a5a6017836107f7565b9150610a6582610a26565b602082019050919050565b5f6020820190508181035f830152610a8781610a4e565b9050919050565b7f496e76616c69642063616e6469646174652049442e00000000000000000000005f82015250565b5f610ac26015836107f7565b9150610acd82610a8e565b602082019050919050565b5f6020820190508181035f830152610aef81610ab6565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610b5a826106af565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b8c57610b8b610b23565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610bdb57607f821691505b602082108103610bee57610bed610b97565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610c507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c15565b610c5a8683610c15565b95508019841693508086168417925050509392505050565b5f819050919050565b5f610c95610c90610c8b846106af565b610c72565b6106af565b9050919050565b5f819050919050565b610cae83610c7b565b610cc2610cba82610c9c565b848454610c21565b825550505050565b5f90565b610cd6610cca565b610ce1818484610ca5565b505050565b5b81811015610d0457610cf95f82610cce565b600181019050610ce7565b5050565b601f821115610d4957610d1a81610bf4565b610d2384610c06565b81016020851015610d32578190505b610d46610d3e85610c06565b830182610ce6565b50505b505050565b5f82821c905092915050565b5f610d695f1984600802610d4e565b1980831691505092915050565b5f610d818383610d5a565b9150826002028217905092915050565b610d9a826107ed565b67ffffffffffffffff811115610db357610db26108bb565b5b610dbd8254610bc4565b610dc8828285610d08565b5f60209050601f831160018114610df9575f8415610de7578287015190505b610df18582610d76565b865550610e58565b601f198416610e0786610bf4565b5f5b82811015610e2e57848901518255600182019150602085019450602081019050610e09565b86831015610e4b5784890151610e47601f891682610d5a565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220c09c804ed4c9fc1723805a592f685a24129062caaca66d6c1ff9e54c8dc0d3ac64736f6c63430008180033"; // Your contract's bytecode here

module.exports = function(deployer) {
  deployer.deploy(VotingSystem, /* constructor arguments if any */);
};
