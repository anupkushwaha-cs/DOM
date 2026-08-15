let inp = document.querySelector("input");
let btn = document.querySelector(".add");
const todoBox = document.querySelector(".todo-container");

let editingTask = null;

// Add / Update
btn.addEventListener("click", function () {

    const value = inp.value.trim();

    if (value === "") return;

    // Update
    if (editingTask) {

        editingTask.textContent = value;
        editingTask = null;
        btn.textContent = "Add";

    } else {

        // Add
        todoBox.innerHTML += `
        <div class="to-do-list">
            <div class="li">
                <h3>${value}</h3>
            </div>

            <div>
                <button class="Delete">Delete</button>
                <button class="Edit">Edit</button>
            </div>
        </div>
        `;
    }

    inp.value = "";
});

// Delete & Edit
todoBox.addEventListener("click", function (event) {

    // Delete
    if (event.target.classList.contains("Delete")) {
        event.target.closest(".to-do-list").remove();
    }

    // Edit
    if (event.target.classList.contains("Edit")) {

        let task = event.target.closest(".to-do-list");

        let heading = task.querySelector("h3");

        inp.value = heading.textContent;

        editingTask = heading;

        btn.textContent = "Update";
    }

});