// create a function that will take an argument that stands for the maximum integer you want to count to
// then initialize a starting value for the total sum
// run a for loop that starts at the first number and counts up to the maximum
// sum the numbers in the loop
// return the final sum
// log the final output
function linearSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i ++) {
        sum += i;
    }
    return sum;
}

console.log(linearSum(100));