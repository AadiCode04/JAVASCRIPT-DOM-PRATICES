// async function greet() {
//     return hello;
// }

// greet().then(()=>{
//     console.log("promise is successful");

// }).catch((error)=>{
//     console.log("promise was rejected with err : " , error); 

// })


function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            return num;
            resolve();
        }, 1000);
    })
}

async function demo() {
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
    getNum();

}

