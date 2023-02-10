export function setupTareaEdit(element){

    const actionEdit = function(tareaParent){
        let id = parseInt(element.dataset.key);
        editData(id);
    }

        
     const editData = (key) =>{

        readOneData(key,(data)=>{
            console.log(data);
            let title = data.titleTarea;
            const containerEdit = document.querySelector('#task'+key);
            const containerTask = containerEdit

            containerTask.classList.remove('container-task');
            containerTask.classList.add('container-task-new');

            containerTask.innerHTML = createHtmlFormTask(key,data.titleTarea)
            let inputEdit = document.querySelector('#taskEdit'+key);
            
            inputEdit.focus()
            if (typeof inputEdit.selectionStart == "number") {
                inputEdit.selectionStart = inputEdit.selectionEnd = inputEdit.value.length;
            } else if (typeof inputEdit.createTextRange != "undefined") {           
                var range = inputEdit.createTextRange();
                range.collapse(false);
                range.select();
            }

            actionCancel(key,data.titleTarea,containerTask) 
            actionSave(key,containerTask) 
            actionSaveEnter(key,containerTask) 
        })
        
     }

     const readOneData = function(key,fn){
        const indexedDB = window.indexedDB;
        if(indexedDB){
            let db;
            const request = indexedDB.open('pomodoro_jreven',1);
            request.onsuccess = () =>{
                db = request.result;
                const transaction = db.transaction(['task'],'readwrite');
                const objectStore = transaction.objectStore('task');
                const requests = objectStore.get(key) 
                requests.onsuccess = () =>{
                   return fn(requests.result);
                }
                
            }    
        }
     }
 
    const createHtmlFormTask = function(id,title){

        let taskForm = /*html */`
            <div class="task">   
                <input type="text" name='task' id='taskEdit${id}' placeholder="Descripción de la tarea" value="${title}">
            </div>
            <div class="task-tools-edit">
                <ul>
                <li><button class="save-task" ><i class="fa-solid fa-floppy-disk"></i></button></li>
                <li><button class="cancel-task"><i class="fa-solid fa-xmark"></i></button></li>
                </ul>
            </div>
        `
        return taskForm;

    }

    const createHtmlViewTask = function(id,title,state){

        let taskForm = /*html */`
             <div class="task">
                <div class="task-mark ${state = 1 ? 'hecho' : ''}" ><a href="#" data-key='${id}'  onclick="setupTareaDone(this)"><i class="fa-regular fa-lg fa-circle-check"></i></a></div>
                <div class="task-title">${title}</div>
            </div>
            <div class="task-tools">
                <ul>
                    <li><button class="editTarea" data-key='${id}' onclick="setupTareaEdit(this)"><i class="fa-solid fa-pencil"></i></button></li>
                    <li><button class="removeTarea" data-key='${id}' onclick="setupTareaDelete(this)"><i class="fa-solid fa-trash"></i></button></li>
                </ul>
            </div>
        `
        return taskForm;

    }

     
    const actionCancel = function(id,title, containerShow){
        // console.log(containerRemove);
        //console.log(containerShow);
        let btnCancel = document.querySelector('.cancel-task');
        
        btnCancel.addEventListener('click', ()=>{
            containerShow.innerHTML =  createHtmlViewTask(id,title)
        })
    }

    const actionSave = function(id,containerTask){
       
        let btnSave = document.querySelector('.save-task');
        let titleTarea = document.querySelector('[name="task"]');

        btnSave.addEventListener('click', ()=>{
            const data = {
                titleTarea:titleTarea.value,
                state: 1   
            }
            updateData(data,id);
            readOneData(id,(data)=>{
                console.log(containerTask)
                containerTask.classList.remove('container-task-new');
                containerTask.classList.add('container-task');
                containerTask.innerHTML = createHtmlViewTask(id,data.titleTarea)
            })
        })
        
     }

     const actionSaveEnter = function(id,containerTask){
       
        let inputSave =  document.querySelector('#taskEdit'+id);;
        // console.log("🚀 ~ file: tareaEdit.js ~ line 133 ~ actionSaveEnter ~ inputSave", inputSave)
        let titleTarea = document.querySelector('[name="task"]');
       

        inputSave.addEventListener('keyup', (e)=>{
            // console.log(e);
            if (e.key === 'Enter') {
            
            const data = {
                titleTarea:titleTarea.value,
                state: 1   
            }
            updateData(data,id);
            readOneData(id,(data)=>{
                //console.log(containerTask)
                containerTask.classList.remove('container-task-new');
                containerTask.classList.add('container-task');
                containerTask.innerHTML = createHtmlViewTask(id,data.titleTarea)
            })    
            }
        })
        
     }


     const updateData = (data,id) =>{
        const indexedDB = window.indexedDB;
        if(indexedDB){
            let db;
            const request = indexedDB.open('pomodoro_jreven',1);
            request.onsuccess = () =>{
                db = request.result;
                const transaction = db.transaction(['task'],'readwrite');
                const objectStore = transaction.objectStore('task');
                const requests = objectStore.put(data,id) 
               // console.log(request);
            }    
        }
        }
 

        let tareaParent = document.querySelector('#tarea');
        actionEdit(tareaParent);


    }
