export function setupTareaRemove(element, fn){

    element.addEventListener('click', ()=>{
            fn(document.querySelector('#tarea'));
    })
}
