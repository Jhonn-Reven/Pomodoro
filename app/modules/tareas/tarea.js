export function setupTarea(element){

let task = document.createElement('div');
task.classList.add('container-task');
task.innerHTML = /*html */`
    <div class="task">
        <div class="task-mark"><a href="#"><i class="fa-regular fa-lg fa-circle-check"></i></a></div>
        <div class="task-title"> Tarea de prueba </div>
    </div>
    <div class="task-tools">
        <ul>
            <li><button id="editTarea"><i class="fa-solid fa-pencil"></i></button></li>
            <li><button id="removeTarea"><i class="fa-solid fa-trash"></i></button></li>
        </ul>
    </div>
`
element.append(task)
}
