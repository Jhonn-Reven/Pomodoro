import '../public/css/style.css'
import javascriptLogo from '../javascript.svg'
import { setupCounter } from './helpers/counter.js'
import { setupMenu } from './modules/menu/menu'
import { setupReloj } from "./modules/reloj/reloj";
import { setupTareaAdd} from "./modules/tareas/tareaAdd";
import { setupTareaEdit } from "./modules/tareas/tareaEdit";
import { setupTarea } from "./modules/tareas/tarea";

console.log(javascriptLogo)
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
        <div class="time">
          <button class="neumorphic--pressed time-active"  >Pomodoro</button>
          <button class="neumorphic" >Descanso</button>
          <button  class="neumorphic">Descanso Largo</button>
        </div>
        <div class="reloj" id="reloj"></div> 
        <div class="control">
          <button class="neumorphic play" ><i class="fa-solid fa-2x fa-play"></i></button>
        </div>
      </div> 
      <div class="tareas neumorphic">
          <h3>Tareas</h3>
          <div id="tarea">
            
            <div class="container-task hecho">
                <div class="task">
                    <div class="task-mark"><a href="#"><i class="fa-sharp fa-solid fa-lg fa-circle-check"></i></a></div>
                    <div class="task-title"> Tarea de prueba </div>
                </div>
                <div class="task-tools">
                    <ul>
                    <li><button><i class="fa-solid fa-pencil"></i></button></li>
                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="container-task-add line-dotted">
            <div class="task-add">
              <button id="addTarea" style="color:#000"><i class="fa-solid fa-circle-plus"></i> Agregar Tarea</button>
            </div>
          </div>
      </div>
    </div>   
  </div>
`

setupMenu(document.querySelector('#menu'));
setupReloj(document.querySelector('#reloj'));
setupTareaAdd(document.querySelector('#addTarea'),setupTarea);
setupTareaEdit(document.querySelector('#tarea'));
