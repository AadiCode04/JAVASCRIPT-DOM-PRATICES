//--------------Arrow Function-----------//

const sum = ( a , b) =>{
    console.log(a+b);
}


//---------ARROW FUNCTION (IMPLICIT RETURN)--------//

const mull = (a ,b) =>(
    a*b
);


//--------------SET TIMEOUT-------------//
//-------------SET INTERVAL---------------//

console.log("hi there!");

// setTimeout( () => {
//     console.log("MY COLLEGE");
    
// } , 4000)

let id = setInterval( () => {
    console.log("APNA COLLEGE");
    
},2000);

console.log(id);

let id2 = setInterval( () => {
    console.log("MY COLLEGE");
    
},3000);

console.log(id2);

clearInterval(id);
clearInterval(id2);

// clearInterval(id);  TO DI IT IN THE CONSOLE LOG IN CONSOLE BROWSER CONSOLE RIGHT NOW NOT IN VS 
console.log("wellcome there");


//----------THIS ARROW FUNCTION-----//

const student = {
    name:"aadi",
    marks:95,
    prop: this, // global scope

    getName : function () {
        console.log(this);
        return this.name;
    },

    getMarks: () =>{
        console.log(this);//Parent's scope -> window
        return this.marks;
        
    }
};









