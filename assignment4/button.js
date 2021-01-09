const grabButton1 = document.querySelector("#btn1");
const grabButton2 = document.querySelector("#btn2");
let pText = document.createElement("p");
document.body.append(pText);
grabButton1.addEventListener("click", event => {
    pText.innerHTML = "I'm right"
})

grabButton2.addEventListener("click", event => {
    pText.innerHTML = "No, I'm right"
})
