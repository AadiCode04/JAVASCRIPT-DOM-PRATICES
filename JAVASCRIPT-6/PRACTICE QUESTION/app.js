//Qsl . Write a JavaScript function that returns array elements larger than a number.

let arr = [ 1 ,2 ,3 ,4 ,5 ,6, 7 , 8, 9, 10 ,1];
let num = 6;

function arrayElement(arr , num) {
    let result = [];
    for ( let i = 0 ; i<arr.length ; i++){

        if(arr[i] > num){
             result.push(arr[i]);
        }
    }
   return result
}
arrayElement(arr , num);
console.log(arrayElement(arr , num));


//Qs2. Write a JavaScript function to extract unique characters from a string.

// let str = 'abcdabcdefgggh';

// function getUnique(str) {
//     let result = "";
//     for ( let i = 0 ; i < str.length ; i++){
//         let ch = str[i];

//         if (result.indexOf(ch) === -1) {
//             result += ch;
//         }
//     }
//     return result;
// }

// getUnique(str);
// console.log(getUnique(str));


//Q3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

// let country = ["Australia", "Germany", "United States of America"];

// function getLongestCountryName(country) {
//     let longest = country[0];

//     for (let i = 1 ; i < country.length ; i++){
//         if (country[i].length > longest.length) {
//             longest = country[i];

//         }
//     }
//     return longest;
// }

// getLongestCountryName(country);
// console.log(getLongestCountryName(country));


//Qs4. Write a JavaScript function to count the number of vowels in a String argument. 



let str = 'qwertyuiop';
function CountVowelString(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]
        if ( ch === 'a' || ch === 'e' || ch === 'i' ||ch === 'o' || ch === 'u') {
            count++;
        }
    }
    return count;
}
CountVowelString(str);
console.log(CountVowelString(str));

//Qs5. Write a JavaScript function to generate a random number within a range (start,end).

// let start = parseInt(prompt("Enter first number"));
// let end = parseInt(prompt("Enter last number"));

let start = 100;
let end = 200 ;

function generateRandom(start , end) {
    let diff = end - start ;
    randomNum = Math.floor(Math.random()*diff)+start;

    return randomNum;
}
generateRandom(start , end);
console.log(generateRandom(start , end));


