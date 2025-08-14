// QUESTION 1 :- Create a program that  generates a random number representing a dice roll

let input = Math.floor(Math.random()*6)+1;
console.log(input);


// QUESTION 2 :- Create an Object representing a car that stores the following properties for the car: name , model , color.

let car = {
    name: "Maruti Suzuki",
    model: "ECCO",
    color: "White",
};
console.log(car.name);


//QUESTION 3 :-Create an object Person with their name,age and city.Edit their city’s original value to change it to “NewYork”.Add a new property country and set it to the UnitedStates.

let Person = {
    name: "XYZ",
    age: 23,
    city: "Vadodara"
};
Person.city="New York";
Person.country = "United States";
console.log(Person);
