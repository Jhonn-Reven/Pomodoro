export function setupTareaDone(element){

    const actionDone = function(){

        let id = parseInt(element.dataset.key);
        let taskDiv = document.getElementById('task'+id);
        let state;
        

        readOneData(id,(data)=>{

            if (  taskDiv.classList.contains('hecho')) {
                state = 0;
                taskDiv.classList.remove('hecho');
                
            } else {
                state = 1
                taskDiv.classList.add('hecho');
            }
            data.state = state;
            updateData(data,id); 

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


    actionDone();


    }
