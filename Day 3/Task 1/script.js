// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(inp.value);
    
// });


let main = document.querySelector("main");

console.log(main);

let span = document.createElement("span");
span.innerHTML = "HEllo kese ho "

let h1 = document.createElement("h1");
h1.innerHTML = "hello <i> kese ho </i>"
main.append(h1, span)