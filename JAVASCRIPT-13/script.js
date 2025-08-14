let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random" ;


btn.addEventListener("click" , async () => {
    // let fact = await getFacts();
    // let p = document.querySelector("#result");
    // p.innerText = fact;

    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src" , link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        console.log(res);
        
    } catch (e) {
        console.log("error -" , e);
        return " no fact found";
    }
}