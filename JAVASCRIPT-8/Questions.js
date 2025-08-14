//------Practice Question :- Qsl. Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [ 1 ,2 ,3 , 4];


const square = nums.map((num) => num * num);
// console.log(square);

let sum = square.reduce((ab , bc) =>
    ab + bc 
);
// console.log(sum);

let average = sum / nums.length;
// console.log(average);



//-------Practice Question :- Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let BeArray =  [ 1 ,2 ,3 ,4 ,5 ];


const ElementPlus = BeArray.map((BeArray) =>
    BeArray + 5
);
// console.log(ElementPlus);

//--------Practice Question :- Qs3. Create a new array whose elements are in uppercase of words present in the original array.


let OriginalElement = [  "a", "b"  , "c" ];

const NewElement = OriginalElement.map((OriginalElement) => 
   
    OriginalElement.toUpperCase()
);
// console.log(NewElement);

//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr , ...args) =>[
    ...arr,
    ...args.map ((v) => v *2),
];

doubleAndReturnArgs ([1 ,2 ,3] , 4 , 4);
doubleAndReturnArgs([2] , 10 , 4);


//Qs5. Write a function called mergeObjects that accepts buo objects and returns a nev object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1 , obj2) => ({...obj1 , ...obj2});

mergeObjects ({ a : 1 , b : 2} , { c : 3 , d : 4 });
// console.log( mergeObjects);

