console.clear();

function highestSCore(scores) {
    var max = scores[0];
    for (var x = 1; x < scores.length; + x++) {
        if (max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}

var scores = [34, 76, 89, 23, 76, ];
var maxScore = highestSCore(scores);
console.log(maxScore);