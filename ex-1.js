// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
for (let item in scores) {
    scores[item] = scores[item] - 10;
}
console.log(scores);