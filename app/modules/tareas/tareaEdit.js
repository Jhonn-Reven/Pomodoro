export function setupTareaEdit(element){

    const createHtmlFormTask = function(id,title){
        let taskForm = document.createElement('div');
        taskForm.classList.add('container-task-new');
        taskForm.innerHTML = /*html */`
            <div class="task">   
                <input type="text" name='task' placeholder="Descripción de la tarea" value="${title}">
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

    const actionCancel = function(containerRemove,containerShow){
        // console.log(containerRemove);
         //console.log(containerShow);
         let btnCancel = document.querySelector('.cancel-task');
         btnCancel.addEventListener('click', ()=>{
             containerRemove.remove();
             containerShow.style.display= 'block' 
         })
     }
 
    //  const actionEdit = function(tareaParent,containerRemove,containerShow){
        
    //      let btnSave = document.querySelector('.save-task');
    //      let titleTarea = document.querySelector('[name="task"]');
 
    //      btnSave.addEventListener('click', ()=>{
    //          const data = {
    //              titleTarea:titleTarea.value,
    //              state: 1   
    //          }
    //          editData(key)
    //          containerRemove.remove();
    //          containerShow.style.display= 'block' 
    //          readData(tareaParent)
             
    //      })
         
    //   }

      const actionEdit = function(btn){

            console.log(btn.target);

    }
 
     const editData = (key) =>{
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
                    const data = requests.result;
                    console.log(data);
                    let id =  data.primaryKey;
                    let title = data.titleTarea;
                    const containerEdit = document.getElementById(id);
                    containerEdit.innerHTML = createHtmlFormTask(data.primaryKey,data.titleTarea)
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
   
      
     
     element.addEventListener('click',(e)=>{

        console.log(e.target);
         
        //  let tareaParent = document.querySelector('#tarea');
        //  let containerTaskAdd = document.querySelector('.container-task-add');
        //  containerTaskAdd.style = 'display:none; transition:all .5s  ease;'; 

 
        //  let containerTaskNew = document.querySelector('.container-task-new');
        //  actionCancel(containerTaskNew,containerTaskAdd)
        //  actionSave(tareaParent,containerTaskNew,containerTaskAdd)
        //  actionHidden(containerTaskNew,containerTaskAdd)
             
     })

    }
