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