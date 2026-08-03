let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");

let flag = true;

btn.addEventListener("click", function () {
  if (flag) {
    bulb.style.backgroundColor = "#FFD54F"; // Warm Yellow
    bulb.style.boxShadow =
      "0 0 25px #FFD54F, 0 0 50px #FFC107, 0 0 80px #FFEB3B";
    btn.innerText = "OFF";
    flag = false;
  } else {
    bulb.style.backgroundColor = "transparent";
     bulb.style.boxShadow = "none";
    btn.innerText = "ON";
    flag = true;
  }
});
