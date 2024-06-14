let buttonAdd = document.querySelector('.button-add-task')
let newTask = document.querySelector('.input-task')
let fullList =document.querySelector('.list-task')

let myList = []  // MInha lista de itens

function addNewTask() {  // Adicionar nova tarefa
    myList.push(newTask.value)

    newTask.value = ''   // Apaga oque tem escrito no input

    showTask()
}

function showTask () { // Mostrar nova tarefa
    let newLi = ''

    myList.forEach((i) => {
        newLi = newLi + `
            <li class="task">
                <img src="./img/checked.png" alt="ok-on-task">
                <p>${i}</p>
                <img src="./img/trash.png" alt="delete-task">
            </li>      
        `
    })

    fullList.innerHTML = newLi
}

buttonAdd.addEventListener('click', addNewTask)