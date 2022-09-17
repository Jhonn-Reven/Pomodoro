// 
export function setupTareaAdd(element, fn){
   

    element.addEventListener('click', ()=>{
        let containerTaskAdd = document.querySelector('.container-task-add');
        containerTaskAdd.style = 'display:none; transition:all .5s  ease;';
        fn(document.querySelector('#tarea'));
            
    })
}
