let addBtn = document.querySelector("#add-btn");
let input = document.querySelector("input");
let list = document.querySelector("ul");

addBtn.addEventListener("click", (q) => {
  if (input.value != "") {
    let newTodo = document.createElement("li");
    let task = document.createElement("span");
    task.textContent = input.value;
    newTodo.appendChild(task);
    let markAsDoneBtn = document.createElement("button");
    markAsDoneBtn.textContent = "mark as done";
    markAsDoneBtn.setAttribute("id", "mad");
    newTodo.appendChild(markAsDoneBtn);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.setAttribute("id", "delete");
    newTodo.appendChild(deleteBtn);
    task.setAttribute("class", "task");
    list.appendChild(newTodo);
    input.value = "";
  }
});

document.addEventListener("click", (e) => {
  let id = e.target.id;
  if (id == "delete") {
    let li = e.target.parentNode;
    list.removeChild(li);
  }
});

document.addEventListener("click", (e) => {
  let id = e.target.id;
  if (id == "mad") {
    let li = e.target.parentNode;
    li.children[0].style.textDecoration = "line-through";
  }
});
