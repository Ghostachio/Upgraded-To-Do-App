let input = document.getElementById("userInput");
let uL = document.getElementById("todoList");
let add = document.getElementById("addButton");
let takeOff = document.getElementsByClassName("remOve");
let oneTask = document.getElementsByClassName("listTask");

function checkInputLength(){
    return input.value.length;
}

function createNewTask(){
    let div = document.createElement('div');
        let li = document.createElement('li');
        let btn = document.createElement('button')
                div.className = "newTask";
                li.className = "listTask";
                btn.className= "remOve";
        li.appendChild(document.createTextNode(input.value));
        div.appendChild(li);
        btn.appendChild(document.createTextNode("Delete"));
        div.appendChild(btn);
        div.appendChild(document.createTextNode(''));
        uL.appendChild(div);
        input.value = '';
}

add.addEventListener('click', function(){
    if ( checkInputLength() > 0){
        createNewTask();
    }
})

document.addEventListener('click', function(event){
    if (event.target.className === "remOve"){
    event.target.parentElement.remove();
    }
})


