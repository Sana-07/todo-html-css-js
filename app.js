// To-Do List

let input = document.getElementById("input");
let ul = document.getElementById("ul");

function addTodo() {
    let inputValue = input.value;
    if (inputValue === "") {
        alert("Empty value not allowed");
    } else {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        
        let liValue = document.createTextNode(inputValue);
        li.appendChild(liValue);

        let div = document.createElement('div');

        let deleteIcon = document.createElement('i');
        deleteIcon.setAttribute("class", "fas fa-trash text-danger");
        deleteIcon.setAttribute("onclick", "deleteItem(this)");

        let editIcon = document.createElement("i");
        editIcon.setAttribute("class", "fas fa-pen-to-square text-primary");
        editIcon.setAttribute("onclick", "editItem(this)");

        div.appendChild(editIcon);
        div.appendChild(deleteIcon);

        li.appendChild(div);

        ul.appendChild(li);
        input.value = "";
    }
}

function deleteAll() {
    ul.innerHTML = "";
}

function deleteItem(e) {
    e.parentNode.parentNode.remove();
}

function editItem(e) {
    let currentText = e.parentNode.parentNode.firstChild.textContent;
    let newText = prompt("Edit List:", currentText);
    if (newText !== null && newText !== "") {
        e.parentNode.parentNode.firstChild.textContent = newText;
    }
}
