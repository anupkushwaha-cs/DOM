// let h1 = document.querySelector("h1");

// const { createElement } = require("react");

// h1.textContent = "Welcome to the dom";

// h1.style.backgroundColor= "lightblue";


// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let par = document.querySelector("p");

// btn.addEventListener("click", ()=>{
//     par.innerText = input.value;
// });



// let msg = document.querySelector("#message");
// let btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
    
//     msg.classList.toggle("msgs");
// });


// let list = document.querySelector("#list");
// let btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     let li = document.createElement("li");
//     li.innerText = "Mango";
//     list.appendChild(li);
    
// });



// let card = document.querySelector(".card");
// let btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     card .remove();
// })


let btnPlus = document.querySelector(".plus");
let h1 = document.querySelector("h1");
let btnMinus = document.querySelector(".minus");

let count = 0;

btnPlus.addEventListener("click", ()=>{
    count = count + 1;
    h1.innerHTML += count ;
});

btnMinus.addEventListener("click", ()=>{
    count = count -1;
    h1.innerHTML += count ;
});
