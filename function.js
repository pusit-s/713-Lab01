function summation(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum;
}

score = [10,20,30]
console.log(summation(score));
