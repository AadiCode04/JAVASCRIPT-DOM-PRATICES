function hello() {
    console.log("hello");
}
// hello();
function printName() {
    console.log("My PC");
}

// printName();



//Pratice Question

// Create a Function to roll a dice & always display the value of the dice (1 to 6).

function diceroll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}
// diceroll();



//Practice Question calculate average 

function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
// average(2 , 4 ,6);


//Create a Function that prints the multiplication table of a number.

function printtable(n) {
   for(let i = n ; i <=n*10 ; i+=n){
    console.log(i);
}

}
// printtable(2);


//----------------RETURN FUNCTION :---------------------------------------------------------------------

function sum(a , b) {
    return a + b ;
}
// console.log(sum(3 ,4));
//  

//Question :- Create a Function that returns the sum of numbers from 1 to n.


function getSum(n) {
    let sum = 0;

    for(let i = 1 ; i <=n ; i++){
        sum = sum + i;
    }
    return sum;
    
}


//Question :-Create a Function that returns the concatenation of all strings in an array.

let str = [ " hi " , "hello" , "bye" , "!"]
function concatenation(str) {
    let result ="";

    for(let i = 0 ; i<str.length ; i++){
        result += str[i];
    }
    return result;
}