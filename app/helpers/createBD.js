export function setupCreateBD(){

    const indexedDB = window.indexedDB;
    if(indexedDB){
        let db;
        const request = indexedDB.open('pomodoro_jreven',1);
        request.onsuccess = () =>{
            db = request.result;
            //console.log('Abierto: ', db)
        }

        request.onupgradeneeded = () =>{
            db =request.result;
            const objectStore = db.createObjectStore('task',{
                autoIncrement:true
            })
           // console.log('Creado: ', db)
        }

        request.onerror = (error) =>{
            //console.log('ERROR: ', error)
        }
    }
}
