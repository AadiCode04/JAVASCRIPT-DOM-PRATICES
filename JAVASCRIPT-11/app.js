function one() {
    return 1 ;
}

function two() {
    one();
}

function three() {
    let ans = two() + one();
    console.log(ans);  
}