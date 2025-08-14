
//----------------------------------------Mouse and Events ------------------------//

let btns = document.querySelectorAll("button");


// function sayHello() {
//     alert("hello");


// }

// for ( btn of btns){
//     btn.onclick = sayHello ; 
//     btn.onmouseenter = function () {
//         console.log("you entered the button")
//     };
//     console.dir(btn);
// }






//----------------------------Event listener-----------------------------------------------//


// ---> syntax {
// element.addEventlistener(event , callback);}

// function sayHello() {
//     alert("hello");
// }
// function sayName() {
//     alert("Aadi");
// }


// for (btn of btns){
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);

//     btn.addEventListener("dbclick", function(){
//         console.log("you double clicked me ");
        
//     });
// }


//-------------------this In Event Listeners---------------------------//
//explaination : - When 'this' is used in a callback of event handler of something, it refers to that something.
 