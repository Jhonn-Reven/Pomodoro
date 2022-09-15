// 
export function setupTareaAdd(element, fn){

    element.addEventListener('click', ()=>{
            fn(document.querySelector('#tarea'));
    })
}
