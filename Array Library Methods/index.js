var names = ["Farhan", "Hasin", "Dhrubo"];
console.log(names);

//shift opposite of pop
names.shift();
console.log(names);

//unshift = opposite of push
names.unshift("Shezan");
console.log(names);

// adding elements using slpice
names.splice(2, 0, "Kamal", "Jamal");
console.log(names);

//removing the elements using slice
names.splice(1, 2);
console.log(names);

//slice
var newArray = names.slice(1);
console.log(newArray);
console.log(names);

//sort
var sortedNames = names.sort();
names.reverse();
console.log(sortedNames);

var numbers = [10, 15, 12, 65, 48];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

var numbers = [10, 15, 12, 65, 48];
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);