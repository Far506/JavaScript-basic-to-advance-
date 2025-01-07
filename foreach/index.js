// for vs foreach

var numbers = [20, 40, 60, 80];
for (var x = 0; x < numbers.length; x++) {
    console.log(numbers[x]);
}



//foreach

/*var numbers = [20, 40, 60, 80];
var squareNumbers = [];
numbers.forEach(function(x) {
    squareNumbers.push(x * x);

})
console.log(squareNumbers);*/




//foreach2

var numbers = [20, 40, 60, 80];
console.log(numbers)
numbers.forEach(function(x, index, arr) {
    arr[index] = x + 5;
})
console.log(numbers)