let buttonAdd = document.querySelector('.button-add-task')
let newTask = document.querySelector('.input-task')
let fullList = document.querySelector('.list-task')

let myList = []  // Minha lista de itens


function addNewTask() {  // Adicionar nova tarefa
    myList.push({
        tarefa: newTask.value,
        concluida: false
    })

    newTask.value = ''   // Apaga oque tem escrito no input

    showTask()
}

function showTask() { // Mostrar nova tarefa
    let newLi = ''

    myList.forEach((i, index) => {
        newLi = newLi + `
            <li class="task ${i.concluida && "done"}">
                <img src="./img/checked.png" alt="ok-on-task" onclick="completeTask(${index})">
                <p>${i.tarefa}</p>
                <img src="./img/trash.png" alt="delete-task" onclick="deleteItem(${index})">
            </li>      
        `
    })

    fullList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(myList))
}

function completeTask(index) {  // Tarefa concluida
    myList[index].concluida = !myList[index].concluida
    showTask()

}

function deleteItem(index) {  // Deletar item
    myList.splice(index, 1)
    showTask()
}

function reloadTask() {  // Recarregar tarefa
    let localStorageTasks = localStorage.getItem('lista')
    if(localStorageTasks){
        myList = JSON.parse(localStorageTasks)
    }
    showTask()
}

reloadTask()
buttonAdd.addEventListener('click', addNewTask)