export function setupTareaDelete(element){

    const actionDelete = function(tareaParent){
        let id = parseInt(element.dataset.key);
        deleteData(id,tareaParent);
        // divBorrar = document.querySelector('#task7');
        // tareaParent.removeChild(divBorrar);
        // readData(tareaParent)
    }

        
    const deleteData = (id,tareaParent) =>{
        const indexedDB = window.indexedDB;
        if(indexedDB){
            let db;
            const request = indexedDB.open('pomodoro_jreven',1);
            request.onsuccess = () =>{
                db = request.result;
                const transaction = db.transaction(['task'],'readwrite');
                const objectStore = transaction.objectStore('task');
                const requests = objectStore.delete(id) 
                requests.onsuccess =(e)=>{

                //    let divBorrar = document.querySelector('#task'+id);
                //     tareaParent.removeChild(divBorrar);
                    readData(tareaParent)
                }
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
                            tareaParent.append(createHtmlNewTask(cursor.primaryKey,cursor.value.titleTarea))
                            cursor.continue()
                        }
                    }
                    
                }    
            }
        }

        const createHtmlNewTask = function(id,title){
            let taskNew = document.createElement('div');
            taskNew.classList.add('container-task');
            taskNew.setAttribute("id",'task'+id);
            taskNew.innerHTML = /*html */`
                <div class="task">
                    <div class="task-mark " ><a data-key='${id}'  href="#" onclick="setupTareaDone(this)"><i class="fa-regular fa-lg fa-circle-check"></i></a></div>
                    <div class="task-title">${title}</div>
                </div>
                <div class="task-tools">
                    <ul>
                        <li><button class="editTarea" data-key='${id}'  onclick="setupTareaEdit(this)"><i class="fa-solid fa-pencil"></i></button></li>
                        <li><button class="removeTarea" data-key='${id}' onclick="setupTareaDelete(this)"><i class="fa-solid fa-trash"></i></button></li>
                    </ul>
                </div>
            `
            
            return taskNew;
           
        }
 
        let tareaParent = document.querySelector('#tarea');
        actionDelete(tareaParent);


    }
