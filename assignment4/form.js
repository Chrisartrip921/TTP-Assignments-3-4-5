// let grabPwd = document.querySelector("#pwd");
// let grabBtn = document.querySelector(".btn");
// let grabForm = document.querySelector("#sign-up");
// let grabUsername = document.querySelector("#uname");
// let grabEmail = document.querySelector("#em");
// let grabSubmit = document.getElementById("sub");
// grabSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const pwd = document.getElementById("pwd").value;
//     if(pwd === "12345678") {
//         let newH1 = document.createElement("h1");
//         document.body.append(newH1);
//         newH1.innerText("Login Sucess");
//         alert("yes");
//     } else {
//     alert("Invalid login!")
//     }
// });
document.getElementById("sub").addEventListener("click", function(event) {
    event.preventDefault();
    const response = document.getElementById("pwd").value;
    if(response === "12345678") {
        const newH1 = document.createElement("h1");
        document.body.appendChild(newH1);
        newH1.style.textAlign = "center";
        newH1.innerText = "Login Sucess";
    } else {
        alert("Login Invalid!");
    }
});