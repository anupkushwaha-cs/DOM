const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

let usersData = [
{
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=90",
    dob: "1998-04-15",
},

{
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=90",
    dob: "1996-09-28",
},

{
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=90",
    dob: "2000-01-12",
},

{
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=90",
    dob: "1997-07-03",
},

{
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=90",
    dob: "1995-12-19",
},
];

const ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem, index) => {
    users.innerHTML += `<div class="user_card">
              <div class="img_box">
                <img
                  src="${elem.image}"
                  alt="image here"
                />
              </div>
              <div class="text">
                <h3>Name - ${elem.name}</h3>
                <p>Email - ${elem.email}</p>
              </div>
              <div class="actions">
          <button id="edit">Edit</button>
          <button onclick="deleteCard(${index})" id="del">Delete</button>
        </div>
            </div>`;
  });
};

ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();
  let name = inp1.value;
  let email = inp2.value;
  let image = url.value;

  if (name.trim() === "" && email.trim() === "" && image.trim() === "") return;

  usersData.push({
    name,
    email,
    image,
  });

  ui();

  form.reset();
});

let deleteCard = (index) => {
  usersData.splice(index, 1)
  ui();
};