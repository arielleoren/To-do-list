// newTodo = localStorage.getItem("savedDiv");

// if ('saveddiv' in localStorage) {
//     (localStorage.getItem('saveddiv'));
// }
//   console.log(localStorage.getItem("saveddiv", divtosave));

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addToDoList)
let number = document.getElementById('numberOfTodos');
let currentNumber = "0"
//represents what's on the screen 
let numberScreen = 0
// let number_screen = parseInt(number.innerText);
//what's on the screen
let todoTextBox = document.getElementById('newToDo')

todoTextBox.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        addToDoList();
    }
});

function addToDoList() {

    let newTodo = document.getElementById('newToDo').value
    if (newTodo === "") {
        return;
    }
    let newTodoDiv = document.createElement('div');
    newTodoDiv.id = "newTodoDiv";
    newTodoDiv.classList = "newTodoDiv"
    newTodoDiv.style.padding = "10px";
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = "checkbox";
    checkbox.addEventListener('change', onToggle);
    var label = document.createElement('label');
    label.innerText = newTodo;
    let removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    // removeButton.style.border = "none";
    removeButton.id = "removeButtonId";
    removeButton.style.marginLeft = "100px";
    removeButton.addEventListener('click', (deleteToDo))
    document.getElementById("newToDo").value = "";
    let todoListDiv = document.getElementById('todoListDiv')
    todoListDiv.appendChild(newTodoDiv);
    newTodoDiv.appendChild(checkbox);
    newTodoDiv.appendChild(label);
    newTodoDiv.appendChild(removeButton);
    newTodoDiv.style.backgroundColor = "#343239";
    newTodoDiv.style.margin = "10px";
    numberScreen += 1;
    number.innerText = numberScreen;

    // localStorage.setItem("name", newTodoDiv)
    // localStorage.setItem("age", "29")
    // console.log(localStorage.getItem("name", newTodoDiv));

    
//         localStorage.setItem('saveddiv', divtosave);
//         console.log('saveddiv', divtosave);
// divtosave = localStorage.getItem("saveddiv");


// if (typeof(Storage) !== "undefined") {
//     // Store
//     let divtosave = newTodoDiv.innerHTML

//     localStorage.setItem("savedDiv", divtosave);
//     console.log(divtosave);
  
        // Store
        let items = [];
        let divtosave = document.querySelector('label').innerHTML
        console.log(divtosave);
        
        items.push(divtosave);

        
        localStorage.setItem('list', JSON.stringify(items));  

//   console.log(localStorage.getItem("list", items));
            
   // Retrieve
   let itemsRetrieved = JSON.parse(localStorage.getItem('list'));
        console.log(itemsRetrieved);
        
    // Get div with .list class
let div = document.getElementById('.newTodoDiv');
console.log(div);


// Iterate retrieved array and append items
itemsRetrieved.forEach(item => {
    itemsRetrieved.push(divtosave.innerHTML += item);
});


// Add an item


// Stringify the new array and overwrite the key
localStorage.setItem("list", JSON.stringify(itemsRetrieved));



    

    function deleteToDo() {
        newTodoDiv.classList.add('delete')
        numberScreen -= 1;
        number.innerText = numberScreen
        localStorage.removeItem("list")
    }
    function onToggle() {
        switch (checkbox.checked) {
            case true:
                numberScreen -= 1;
                number.innerText = numberScreen;
                break;
            case false:
                numberScreen += 1;
                number.innerText = numberScreen;
                break;
        }
    }

    checkbox.addEventListener('change', hideCompleted);
    let hideCheckBox = document.getElementById('hide')
    hideCheckBox.addEventListener('change', hideCompleted);
    hideCheckBox.addEventListener('change', returnCompleted);

    function hideCompleted() {
        if (hideCheckBox.checked && checkbox.checked) {
            newTodoDiv.classList.add('display-none')
        }
    }
    function returnCompleted() {
        if (hideCheckBox.checked == false && checkbox.checked) {
            newTodoDiv.classList.remove('display-none')
        }
    }

    let input = document.getElementById("filterQuery");

    input.addEventListener('keyup', filterFunction)

    function filterFunction() {
        // console.log("whats up");
        let filter = input.value.toUpperCase();
        for (i = 0; i < newTodo.length; i++) {
            if (newTodo.toUpperCase().indexOf(filter) > -1) {
                newTodoDiv.style.display = "";
            }
            else {
                newTodoDiv.style.display = "none";
            }
        }
    }
}