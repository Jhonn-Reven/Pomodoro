// 


export function setupTareaAdd(element, fn){

    const createHtmlTask = function(){
        let taskAdd = document.createElement('div');
        taskAdd.classList.add('container-task-new');
        taskAdd.innerHTML = /*html */`
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
        return taskAdd;

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
        tareaParent.append(createHtmlTask())

        let containerTaskNew = document.querySelector('.container-task-new');
        actionCancel(containerTaskNew,containerTaskAdd)
        actionHidden(containerTaskNew,containerTaskAdd)
            
    })




}

