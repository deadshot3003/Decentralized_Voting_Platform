// Import web3.js library
const Web3 = require('web3');

// Instantiate web3 with the provider URL (replace with your Infura project URL or local node URL)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// ABI (Application Binary Interface) of your deployed smart contract
const contractABI = [
    // Define your smart contract functions here
    {
        "constant": true,
        "inputs": [],
        "name": "getBallotsCount",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    // Add more functions as needed
];

// Address of your deployed smart contract
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Instantiate contract object
const votingContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to fetch available ballots from the smart contract
async function fetchBallots() {
    try {
        // Call smart contract function to get the number of ballots
        const ballotsCount = await votingContract.methods.getBallotsCount().call();

        // Fetch details of each ballot
        const ballots = [];
        for (let i = 0; i < ballotsCount; i++) {
            const ballot = await votingContract.methods.getBallot(i).call();
            ballots.push(ballot);
        }

        // Return the list of ballots
        return ballots;
    } catch (error) {
        console.error('Error fetching ballots:', error);
        return [];
    }
}

// Function to cast a vote on a selected ballot
async function castVote(ballotId, optionId) {
    try {
        // Get the user's Ethereum account
        const accounts = await web3.eth.getAccounts();

        // Call smart contract function to cast the vote
        await votingContract.methods.vote(ballotId, optionId).send({ from: accounts[0] });

        // Vote successful
        console.log('Vote submitted successfully!');
    } catch (error) {
        console.error('Error casting vote:', error);
    }
}

// Example usage:
// Fetch available ballots and display them
fetchBallots().then(ballots => {
    console.log('Available ballots:', ballots);
    // Display ballots in the UI
    displayBallots(ballots);
});

// Function to display ballots in the UI (replace this with your UI rendering logic)
function displayBallots(ballots) {
    ballots.forEach(ballot => {
        console.log(`Ballot ID: ${ballot.id}, Title: ${ballot.title}`);
        // Render ballot information in the UI
    });
}

// Example usage:
// Cast a vote on a selected ballot and option
// Replace `ballotId` and `optionId` with the selected values from the UI
const selectedBallotId = 0;
const selectedOptionId = 1;
castVote(selectedBallotId, selectedOptionId);

