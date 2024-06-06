// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    // Mapping to store whether a voter is registered
    mapping(address => bool) public registeredVoters;

    // Function to register a voter
    function registerVoter() public {
        registeredVoters[msg.sender] = true;
    }

    // Function to check if a voter is registered
    function isRegistered(address _voter) public view returns (bool) {
        return registeredVoters[_voter];
    }
}



// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    // Struct to represent a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Array to store the list of candidates
    Candidate[] public candidates;

    // Mapping to store whether a voter has cast a vote
    mapping(address => bool) public hasVoted;

    // Function to add a candidate to the list
    function addCandidate(string memory _name) public {
        candidates.push(Candidate(candidates.length, _name, 0));
    }

    // Function to cast a vote for a candidate
    function vote(uint _candidateId) public {
        // Ensure the voter has not already voted
        require(!hasVoted[msg.sender], "You have already voted.");

        // Ensure the candidate ID is valid
        require(_candidateId < candidates.length, "Invalid candidate ID.");

        // Record the vote and mark the voter as having voted
        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;
    }

    // Function to retrieve the total number of candidates
    function getCandidateCount() public view returns (uint) {
        return candidates.length;
    }

    // Function to retrieve the details of a candidate by ID
    function getCandidate(uint _candidateId) public view returns (uint, string memory, uint) {
        require(_candidateId < candidates.length, "Invalid candidate ID.");
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.id, candidate.name, candidate.voteCount);
    }
}

