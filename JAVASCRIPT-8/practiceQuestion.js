//--------Practice Question :- Check if all numbers in our array are multiples of 10 or not.---------//


// for all number we use every method 


// let nums = [ 10 ,20 ,30 , 40];

// let ans = nums.every((el) => 
//      el % 10 ==0
// );

// console.log(ans);


//------------Practice Question :-Create a function to find the min number in an array.----------//


// ANS :- to find minimun number we use reduce method

//  let nums = [ 10 ,20 ,30 , 40];

//  let min  = nums.reduce((min , el) =>{
//         if ( min < el){
//             return min;
//         }else {
//             return el;
//         }
//  });
// console.log(min);

//----------------spread----------------//



const data = {
    email : "ironman@gmail.com",
    password : "abcd",
};

const dataCopy = {
    ...data , id : 123 , country : "India" ,
};



//-------------Array spread--------------//

let arr = [ 1 ,2 , 4, 5];
let obj1 = {...arr}
// console.log(obj1);

//---------------------Rest------------------//


function sum(...args) {
    for (let i = 0; i < array.length; i++) {

    console.log(" args" , args[i]);
    }
}  





