const form = document.querySelector("form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const users = document.querySelector(".users");

form.addEventListener("submit", (events) => {
  events.preventDefault();
  let naam = name.value;
  let gmail = email.value;

if(naam.trim()==="" && gmail.trim()==="") return;

  users.innerHTML += `    <div class="user_card">

            <div class="img_box">
                <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
                    alt="User image"
                >
            </div>

            <div class="text">
                <h3>${naam}</h3>
                <p>${gmail}</p>
            </div>
             </div>
            `;
  form.reset();
});
