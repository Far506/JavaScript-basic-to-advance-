function highestScorer(playerInfo) {
    var highestScorer = playerInfo[0][0]; // Store the name
    var highestScore = playerInfo[0][1]; // Store the score

    for (var x = 1; x < playerInfo.length; x++) {
        if (highestScore < playerInfo[x][1]) {
            highestScore = playerInfo[x][1]; // Update highest score
            highestScorer = playerInfo[x][0]; // Update highest scorer
        }
    }

    return highestScorer; // Return the highest scorer
}

var playersInfo = [
    ["Shakib", 100],
    ["Tamim", 80],
    ["Mushfiq", 75],
    ["Mahmudullah", 120],
];

var name = highestScorer(playersInfo);
console.log(name); // Output the highest scorer's name