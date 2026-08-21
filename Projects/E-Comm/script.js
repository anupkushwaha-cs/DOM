const btn = document.querySelector("#create"); 
const form = document.querySelector(".form"); 
const closebtn = document.querySelector("#close"); 
const formDiv = document.querySelector("form"); 
const productDiv = document.querySelector(".product"); 
 
const productArr = []; 

let updateIndex = null;
 
let ui = () => { 

  productDiv.innerHTML = "";

  productArr.forEach((elem, index) => { 
    productDiv.innerHTML += ` 
         <div class="product-card"> 
                <div class="img"> 
                    <img src="${elem.image}" 
                        alt=""> 
                </div> 
               <div class="text"> 
                 <h3>${elem.productName}</h3> 
                <p>${elem.Description}</p> 
                <p>${elem.price}</p> 
 
               </div> 
                <div class="btn"> 
                    <button class="update" onclick="updateProduct(${index})">Update</button> 
                    <button class="delete" onclick="deleteProduct(${index})">Delete</button> 
                </div> 
 
            </div> 
        `; 
  }); 
}; 
 
btn.addEventListener("click", () => { 
  form.style.display = "flex"; 
}); 
 
closebtn.addEventListener("click", () => { 
  form.style.display = "none"; 
}); 
 
form.addEventListener("submit", (event) => { 
  event.preventDefault(); 
 
  let productName = event.target[0].value; 
  let Description = event.target[1].value; 
  let price = event.target[2].value; 
  let image = event.target[3].value; 
 
  if ( 
    productName.trim() === "" || 
    Description.trim() === "" || 
    price.trim() === "" || 
    image.trim() === "" 
  ) { 
    alert("Please Fill All The Fields"); 
    return; 
  } 
 
  let obj = { 
    productName, 
    Description, 
    price, 
    image, 
  }; 
 
  if (updateIndex !== null) { 

    productArr[updateIndex] = obj; 

    updateIndex = null;

  } else { 

    productArr.push(obj); 

  }

  console.log(productArr); 
  ui(); 
 
  formDiv.reset(); 
 
  form.style.display = "none"; 
}); 


const updateProduct = (index) => {

  form.style.display = "flex";

  updateIndex = index;

  let product = productArr[index];

  form[0].value = product.productName;
  form[1].value = product.Description;
  form[2].value = product.price;
  form[3].value = product.image;

};


const deleteProduct = (index) => {

  productArr.splice(index, 1);

  ui();

};