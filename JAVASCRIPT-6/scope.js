let sum = 54; // GLOBAL SCOPE

function calc(a,b) {
    let sum = a+b;//Function Scope
    console.log(sum);
}
calc(1,2)