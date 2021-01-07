//  1)
// grabContainer is set to the host of the element "container".
const grabContainer = document.getElementById("container");
// console log the item with the ID container
console.log(grabContainer);

//  2)
// grabContainer2 grabs the id #container from the document
const grabContainer2 = document.querySelector("#container");
// console log the item with the id container 
console.log(grabContainer2);

//  3)
//Grab all tags with the class name second
const grabAllSecond = document.querySelectorAll(".second");
//loop through all selected elements and print them out seperately
grabAllSecond.forEach(item => {
    console.log(item);
})


//  4)
//grab all elements inside of an ol that have the class name third
const grabThirdOl = document.querySelector("ol .third");
//print out all selected elements
console.log(grabThirdOl);

//  5) //Had to comment out for the other questions
// grabs all elements with container id
// const changeContainer = document.querySelector("#container");
// adds the text "Hello" 
// changeContainer.innerText += "Hello";

//  6)
// Add the class main to the div with a class of footer
let grabFooter = document.querySelectorAll("div");
grabFooter.forEach(div => {
    if(div.classList.contains("footer")) {
        div.classList.add("main");
    }
})

//  7)
// Remove the class main on the div with a class of footer.
let grabFooter2 = document.querySelectorAll("div");
//runs through each of the divs. If statement catched the div with main and removes the main class.
grabFooter2.forEach(div => {
    if(div.classList.contains("main")) {
        div.classList.remove("main");
    }
})

//  8)
// Create a new li element.
let newLi = document.createElement("li");
//append the new li to the bottom of the body
document.body.append(newLi);

//  9)
// Give the created li the text "four".
//innerText method to place text in the list
newLi.innerText = "four"; 

// 10)
// Append the li to the ul element.
const grabUl = document.querySelector("ul");
//append the new list element to the unordered list
grabUl.appendChild(newLi);

//  12) 
//  Loop over all of the lis inside the ol tag and give them a background color of "green".
const grabOl = document.querySelectorAll("ol");
// console.log(grabOl);
//For each li in ol, background color changes to green
grabOl.forEach(li => {
    li.style.background = "green";
})

//  13)
// Remove the div with a class of footer.
let grabFooter3 = document.querySelectorAll("div");
//runs through each of the divs. If statement catches the div with footer class and removed that div
grabFooter3.forEach(div => {
    if(div.classList.contains("footer")) {
        div.remove();
    }
})