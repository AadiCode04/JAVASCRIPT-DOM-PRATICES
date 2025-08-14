// Question  : - Write a JS program to delete all occurence of element " num" in given array



// let arr = [ 1 , 2 , 3 ,4 ,5 , 6 , 2 ,7 ,3];
// let num =2 ; 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i ,1 );
//   }

// }

// console.log(arr);





// Question 2 = Write a JS program to find the no of digits in a number 

// let number = 287152;
// let count = 0 ;

// let copy = number;

// while (copy > 0 ) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);



// Question 2 = Write a JS program to find sum of number

// let number = 287152;
// let sum = 0;

// let copy = number;
// while (copy > 0 ) {
//     digit = copy % 10;
//     sum+=digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);



// // Question 4 = print factorial of a number n .
// let number = parseInt(prompt("Enter a number:"));
// let factorial = 1 ; 

// for ( let i=1 ; i<=number ; i++){
//     factorial *= i ;
// }

// console.log(`factorial of ${number} is ${factorial}`);



// Find the largest number in an array with only positive numbers.


let arr = [ 2 ,4 ,5 ,6 ,7 ,8 ,9 ];
let largest = 0;

for (let i= 0; i< arr.length; i++) {
    if (largest < arr[i]){
        largest = arr[i]
    }
        
    }    
console.log(largest);








