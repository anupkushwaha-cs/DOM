let btn = document.querySelector("button");
let bulb = document.querySelector(".bulb");

btn.addEventListener("click",function(){
    if(bulb.classList.toggle("lightUp")){
        btn.textContent = "OFF";
    }
    else{
        btn.textContent= "ON"
    }
})