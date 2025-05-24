let btn = document.querySelector("#add-todo");
let ul = document.querySelector("ul");
let inp = document.querySelector("#todo-input");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return; // Prevent empty tasks
    let item = document.createElement("li");
    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    // Add event to toggle completed style
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            item.classList.add("completed");
        } else {
            item.classList.remove("completed");
        }
    });
    item.appendChild(checkbox);

    // Add task text
    let span = document.createElement("span");
    span.innerText = inp.value;
    item.appendChild(span);

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        let par = e.target.parentElement;
        ul.removeChild(par);
    }
});
