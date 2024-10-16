//creating an array methods code

let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
console.log(arr1.concat(arr2)); //using concat to join the 2 arrays

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //using push to add kiwi to the array fruits
console.log(fruits);


let array1 = [1, 2, 3];
array1.unshift(4, 5); //using unshift to add 4 and 5 to the beginning of the array1
console.log(array1);

fruits.pop(); //using pop to remove the last element from the fruit array
console.log(fruits);

let array2 = [1, 2, 3];
array2.shift(); //using shift to remove the first element from the array 2
console.log(array2);

console.log(fruits.sort()); //sorting the fruits array alphabetically using sort
console.log(fruits.slice(1)); //creating a new array containing a portion of the fruits

//use splice in inserting and removimg elements in the months array
let months = ["January", "February", "March", "May", "July"];
months.splice(3, 0, "April"); //inserting February at index 3
console.log(months);

months.splice(5, 1, "June"); //replacing the element at index 5 with June
console.log(months);