export function setupTareaEdit(element){

    let taskEdit = document.createElement('div');
    taskEdit.classList.add('container-task-edit');
    taskEdit.innerHTML = /*html */`
        <div class="task">   
            <input type="text" placeholder="Descripción de la tarea">
        </div>
        <div class="task-tools-edit">
            <ul>
            <li><button class="save-task"><i class="fa-solid fa-floppy-disk"></i></button></li>
            <li><button class="cancel-task"><i class="fa-solid fa-xmark"></i></button></li>
            </ul>
        </div>
    `

    element.append(taskEdit)
    }
