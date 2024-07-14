function AddTask(content) {
  let tasks_list = document.querySelector(".tasks");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let b = document.createElement("button");
  tasks_list.appendChild(li);
  li.appendChild(p);
  li.appendChild(b);
  li.classList.add("task");
  b.innerHTML = "Delete";
  p.innerHTML = content;
  b.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  p.addEventListener("click", (e) => {
    e.target.classList.toggle("dashed");
  });
}
document.querySelector(".add_task").addEventListener("click", () => {
  let task_to_add = document.querySelector(".task_to_add");
  if (task_to_add.value != "") {
    AddTask(task_to_add.value);
    task_to_add.value = "";
  }
});

let tasks = document.querySelectorAll("ul li button");
tasks.forEach((task) => {
  task.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
let tasks_p = document.querySelectorAll("ul li p");
tasks_p.forEach((task) => {
  task.addEventListener("click", (e) => {
    e.target.classList.toggle("dashed");
  });
});
