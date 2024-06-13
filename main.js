const button = document.querySelector(".buttonAdd")

function resetForm() {
    if(text.length < 0){
        textElement = ""
    }
}

function addNewTask() {
    const list = document.getElementById("list")
    const  text = document.getElementById("task_name").value

    if(text.length === 0 ) {
        alert("Invalid task")
        return
    }

    const listItem = document.createElement("li")
    listItem.className = "list-item"

    const textElement = document.createTextNode(text)
    listItem.appendChild(textElement)
    list.appendChild(listItem)

}



button.addEventListener("click", resetForm)