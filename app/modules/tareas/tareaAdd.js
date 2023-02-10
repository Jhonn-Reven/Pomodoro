

export function setupTareaAdd(element, fn){

    const createHtmlFormTask = function(){
        let taskForm = document.createElement('div');
        taskForm.classList.add('container-task-new');
        taskForm.innerHTML = /*html */`
            <div class="task">   
                <input type="text" name='task' placeholder="Descripción de la tarea">
            </div>
            <div class="task-tools-edit">
                <ul>
                <li><button class="save-task"><i class="fa-solid fa-floppy-disk"></i></button></li>
                <li><button class="cancel-task"><i class="fa-solid fa-xmark"></i></button></li>
                </ul>
            </div>
        `
        return taskForm;

    }

    const createHtmlNewTask = function(id,title,state){
        let taskNew = document.createElement('div');
        if (state === 0) {
            taskNew.classList.add('container-task')
        } else {
            taskNew.classList.add('container-task')
            taskNew.classList.add('hecho')
        }
        taskNew.setAttribute("id",'task'+id);
        taskNew.innerHTML = /*html */`
            <div class="task">
                <div class="task-mark" ><a data-key='${id}'  href="#" onclick="setupTareaDone(this)"><i class="fa-regular fa-lg fa-circle-check"></i></a></div>
                <div class="task-title">${title}</div>
            </div>
            <div class="task-tools">
                <ul>
                    <li><button class="editTarea" data-key='${id}'  onclick="setupTareaEdit(this)"><i class="fa-solid fa-pencil"></i></button></li>
                    <li><button class="removeTarea" data-key='${id}' onclick="setupTareaDelete(this)" ><i class="fa-solid fa-trash"></i></button></li>
                </ul>
            </div>
        `
        
        return taskNew;
       
    }
      

    const actionCancel = function(containerRemove,containerShow){
       // console.log(containerRemove);
        //console.log(containerShow);
        let btnCancel = document.querySelector('.cancel-task');
        btnCancel.addEventListener('click', ()=>{
            containerRemove.remove();
            containerShow.style.display= 'block' 
        })
    }

    const actionSave = function(tareaParent,containerRemove,containerShow){
       
        let btnSave = document.querySelector('.save-task');
        let titleTarea = document.querySelector('[name="task"]');

        btnSave.addEventListener('click', ()=>{
            const data = {
                titleTarea:titleTarea.value,
                state: 1   
            }
            addData(data)
            containerRemove.remove();
            containerShow.style.display= 'block' 
            readData(tareaParent)
            
        })
        titleTarea.addEventListener('keyup', (e)=>{

            if (e.key === 'Enter') {

            const data = {
                titleTarea:titleTarea.value,
                state: 0   
            }
            addData(data)
            containerRemove.remove();
            containerShow.style.display= 'block' 
            readData(tareaParent)

            }
        })
        
     }

    const addData = (data) =>{
    const indexedDB = window.indexedDB;
    if(indexedDB){
        let db;
        const request = indexedDB.open('pomodoro_jreven',1);
        request.onsuccess = () =>{
            db = request.result;
            const transaction = db.transaction(['task'],'readwrite');
            const objectStore = transaction.objectStore('task');
            const requests = objectStore.add(data) 
            
        }    
    }
    }

    const readData = (tareaParent) =>{
        tareaParent.textContent = '';
        const indexedDB = window.indexedDB;
        if(indexedDB){
            let db;
            const request = indexedDB.open('pomodoro_jreven',1);
            request.onsuccess = () =>{
                db = request.result;
                const transaction = db.transaction(['task'],'readonly');
                const objectStore = transaction.objectStore('task');
                const requests = objectStore.openCursor() 

                requests.onsuccess =(e)=>{
                    const cursor = e.target.result
                    if(cursor){
                        //data = cursor.value;
                        //console.log(cursor)
                        tareaParent.append(createHtmlNewTask(cursor.primaryKey,cursor.value.titleTarea,cursor.value.state))
                        cursor.continue()
                    }
                }
                
            }    
        }
    }



    const actionHidden = function(containerRemove,containerShow){
        document.addEventListener('mouseup', (e)=>{
            if (!containerRemove.contains(e.target)) { 
                containerRemove.remove();
                containerShow.style.display= 'block' 
               // alert('fuera')
            }else{
                containerShow.style.display= 'none' 
            }
         })
     }


    
 
    element.addEventListener('click', ()=>{
        
        let tareaParent = document.querySelector('#tarea');
        let containerTaskAdd = document.querySelector('.container-task-add');
        containerTaskAdd.style = 'display:none; transition:all .5s  ease;'; 
        tareaParent.append(createHtmlFormTask())

        let containerTaskNew = document.querySelector('.container-task-new');
        actionCancel(containerTaskNew,containerTaskAdd)
        actionSave(tareaParent,containerTaskNew,containerTaskAdd)
        actionHidden(containerTaskNew,containerTaskAdd)

        document.querySelector('[name="task"]').focus();
            
    })

    


}

