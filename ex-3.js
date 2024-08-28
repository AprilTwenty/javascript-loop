// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
/*
minScore = Math.min(...scores);
console.log(minScore);
*/
minScore = Infinity;
for (let i = 0; i < scores.length; i++){
    if (scores[i] < minScore){
        minScore = scores[i];
    }
}
console.log(minScore);