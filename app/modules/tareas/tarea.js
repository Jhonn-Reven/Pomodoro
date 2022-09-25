export function setupTarea(element){
   
    readData(element);
    function readData(tareaParent){
        //console.log('holaaaaaaaaa');
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
        taskNew.innerHTML = /*html */`
            <div class="task" id='${id}'>
                <div class="task-mark" ><a href="#"><i class="fa-regular fa-lg fa-circle-check"></i></a></div>
                <div class="task-title">${title}</div>
            </div>
            <div class="task-tools">
                <ul>
                    <li><button id="editTarea"><i class="fa-solid fa-pencil"></i></button></li>
                    <li><button id="removeTarea"><i class="fa-solid fa-trash"></i></button></li>
                </ul>
            </div>
        `
        return taskNew;

    }

   

}





