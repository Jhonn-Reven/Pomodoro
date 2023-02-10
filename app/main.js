import '../public/css/style.css'
import Sortable from 'sortablejs';
import { setupCreateBD } from "./helpers/createBD";
import { setupMenu } from './modules/menu/menu'
import { setupReloj,setupRelojTime, cronometro } from "./modules/reloj/reloj";
import { setupTareaAdd} from "./modules/tareas/tareaAdd";
import { setupTareaEdit} from "./modules/tareas/tareaEdit";
import { setupTareaDone} from "./modules/tareas/tareaDone";
import { setupTareaDelete} from "./modules/tareas/tareaDelete";
import { setupTarea} from "./modules/tareas/tarea";


setupCreateBD();
document.querySelector('#app').innerHTML =
/*html*/ `
  <div>
      <div class="menu neumorphic">
        <div class="logo">
          <h4 class="title">Pomodoro</h4>
        </div>
        <div class="container-menu" id="menu"></div>
      </div>
    <div class="container-p-task">
       <div class="container-pomodoro">
        <div class="time" id='times'></div>
        <div class="reloj" id="reloj"></div> 
        <div class="control">
          <button class="neumorphic play" onclick="cronometro(0,25)" ><i class="fa-solid fa-2x fa-play"></i></button>
        </div>
      </div> 
      <div class="tareas neumorphic">
          <h3>Tareas</h3>
          <div id="tarea"></div>
          <div class="container-task-add line-dotted">
            <div class="task-add">
              <button id="addTarea" style="color:#000"><i class="fa-solid fa-circle-plus"></i> Agregar Tarea</button>
            </div>
          </div>
      </div>
    </div>   
  </div>
`

window.setupTareaEdit =  setupTareaEdit;
window.setupTareaDelete =  setupTareaDelete;
window.setupTareaDone =  setupTareaDone;
window.cronometro = cronometro;
// object.addEventListener("click", setupTareaEdit(this));
setupMenu(document.querySelector('#menu'));
setupRelojTime(document.querySelector('#times'));
setupReloj(document.querySelector('#reloj'));
setupTareaAdd(document.querySelector('#addTarea'));
setupTarea(document.querySelector('#tarea'));



const btn = document.querySelectorAll('.btn-estado');

btn.forEach( boton =>{
  boton.addEventListener("click",(e)=>{
    const btnActivo = document.querySelector('.neumorphic--pressed');
    btnActivo.classList.remove('neumorphic--pressed');
    btnActivo.classList.remove('time-active');
    btnActivo.classList.add('neumorphic')
    boton.classList.remove('neumorphic')
    boton.classList.add('neumorphic--pressed')
    boton.classList.add('time-active')
    
  })
})

Sortable.create(tarea,{
  group:'tarea',
  animation:200
});

function actionEdit(btn){

  console.log(btn.target);

}
