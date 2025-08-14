//-----------------ARRAY METHODS---------------//

//-----------------{For Each method-1}----------//




// let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//     console.log(el);
    
// };

// // method-1 //   
// arr.forEach(print);



// let arr = [ 
    
//     {
//     name: " aadi",
//     marks:95,
//     },
//     {
//         name:"shradhha",
//         marks: 94.4,
//     },
//     {
//         name: "abc",
//         marks:92,
//     },
// ];
// // -----------CONVERTING STUDENT MARKS INTO GPA USING MAP FUNCTION-------//

// let gpa = arr.map((studentGPA) =>{
//     return studentGPA.marks/10;
// })


// console.log(gpa);

// arr.forEach( (studentmarks) =>{
//     console.log(studentmarks.marks    

//     );
    
// })


//----------------------------MAP FUNCTION----------------//

// let num = [  1 ,2 ,3 ,4 ];

// let double = num.map((el) => {
//     return el*2    
// })
// console.log(double);

 
//-------------------------REDUCE FUNCTION -----------------//


// SYNTAX :-  arr.reduce ( reducer function with 2 variable for ( accumulator , element));

 
let numArr = [ 1 ,2 ,3, 4];

let FinalVal = numArr.reduce(( res , el) => res + el);

console.log(FinalVal);









 