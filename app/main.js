import '../public/css/style.css'
import javascriptLogo from '../javascript.svg'
import { setupCounter } from './helpers/counter.js'
console.log(javascriptLogo)
document.querySelector('#app').innerHTML =
/*html*/ `
  <div>
      <div class="menu neumorphic">
        <div class="logo">
          <h4 class="title">Pomodoro</h4>
        </div>
        <div class="container-menu" >
          <ul class="menu-items">
            <li><a class="btn-icon neumorphic" href="#"><i class="color-primary fa-solid fa-gear"></i></a></li>
          </ul>
          <div class="container-setting ">
            <div class="modal-setting">
              <div class="option-container">
                <div class="option-settings">
                  <button>
                    <span class="icon-setting"><i class="fas fa-hourglass-start"></i></span>
                    <span>Tiempo de Concentración</span>
                    <span><i class="fas fa-arrow-right"></i></span>
                  </button>
                </div>
                <div class="option-settings">
                  <button>
                    <span class="icon-setting"><i class="fas fa-bell"></i></span>
                    <span>Alarma</span>
                    <span><i class="fas fa-arrow-right"></i></span>
                  </button>
                </div>
                <div class="option-settings">
                  <button >
                    <span class="icon-setting"><i class="fas fa-comment-alt"></i></span>
                    <span>Notificaciones</span>
                    <span><i class="fas fa-arrow-right"></i></span>                    
                  </button>
                </div>
              </div>
            </div>
            <div class="result-container" >
                <div class="result-time" >
                  <h4>Configuración del tiempo</h4> 
                  <div class="container-input-times">
                      <h5>Personalizado</h5>
                      <div class="form-group">
                        <label for="">Pomodoro</label>
                        <input type="number" placeholders="minutos">
                      </div>
                      <div class="form-group">
                        <label for="">Descanso</label>
                        <input type="number" placeholders="minutos">
                      </div>
                      <div class="form-group">
                        <label for="">Descanso Largo</label>
                        <input type="number" placeholders="minutos">
                      </div>
                  </div>
                  <div class="container-default-time">
                    <h5>Popular</h5>
                    <div class="form-group">
                      <label for="">20 min &nbsp;•&nbsp; 5 min &nbsp;•&nbsp;15 min </label>
                      <input type="radio" name="time-default">
                    </div>
                    <h5>Medio</h5>
                    <div class="form-group">
                      <label for="">40 min &nbsp;•&nbsp; 8 min &nbsp;•&nbsp;20 min </label>
                      <input type="radio" name="time-default">
                    </div>
                    <h5>Extendido</h5>
                    <div class="form-group">
                      <label for="">60 min &nbsp;•&nbsp; 10 min &nbsp;•&nbsp;25 min </label>
                      <input type="radio" name="time-default">
                    </div>
                  </div>
                </div>
                <div class="result-alarm">
                  <h4>Configuración de Alarma</h4> 
                  <div class="form-group">
                    <h5>Sonido</h5>
                    <div class="group-btn">
                        <button>Sonido 1</button>
                        <button>Sonido 2</button>
                        <button>Sonido 3</button>
                    </div>
                  </div>
                  <br>
                  <div class="form-group">
                    <h5>Volumen</h5>
                    <input type="range" value="70" min="0" max="100">
                  </div>
                </div>
                <div class="result-notification">
                  <h4>Notificaciones</h4>
                  
                  <div class="form-group">
                    <h5>Notificar al completar el temporizador</h5> 
                    <div class="onoffswitch">
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
                    <label class="onoffswitch-label" for="myonoffswitch">
                      <span class="onoffswitch-inner"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </div>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
        
      </div>
    <div class="container-p-task">
       <div class="container-pomodoro">
        <div class="time">
          <button class="neumorphic--pressed time-active"  >Pomodoro</button>
          <button class="neumorphic" >Descanso</button>
          <button  class="neumorphic">Descanso Largo</button>
        </div>
        <div class="reloj">
          <div class="donus neumorphism-donus">
            <div class="donus-interior neumorphism-donus-i">
              <p>Personalizado</p>
              <span class="tiempo "><time id="tiempo">00:00</time></span>
              <p>Tarea 1</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="280" height="280">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle id="circle" cx="140" cy="140" r="132" stroke-linecap="round" />
            </svg>
          </div>
        </div> 
        <div class="control">
          <button class="neumorphic play" ><i class="fa-solid fa-2x fa-play"></i></button>
        </div>
      </div> 
      <div class="tareas neumorphic">
          <h3>Tareas</h3>
          <div class="container-task">
            <div class="task">
              <div class="task-mark"><a href="#"><i class="fa-regular fa-lg fa-circle-check"></i></a></div>
              <div class="task-title"> Tarea de prueba </div>
            </div>
            <div class="task-tools">
              <ul>
                <li><a href=""><i class="fa-solid fa-pencil"></i></a></li>
                <li><a href=""><i class="fa-solid fa-trash"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="container-task hecho">
            <div class="task">
              <div class="task-mark"><a href="#"><i class="fa-sharp fa-solid fa-lg fa-circle-check"></i></a></div>
              <div class="task-title"> Tarea de prueba </div>
            </div>
            <div class="task-tools">
              <ul>
                <li><a href=""><i class="fa-solid fa-pencil"></i></a></li>
                <li><a href=""><i class="fa-solid fa-trash"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="container-task-edit">
            <div class="task">   
              <input type="text" placeholder="Descripción de la tarea">
            </div>
            <div class="task-tools-edit">
              <ul>
                <li><a href="" class="save-task"><i class="fa-solid fa-floppy-disk"></i></a></li>
                <li><a href="" class="cancel-task"><i class="fa-solid fa-xmark"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="container-task-add line-dotted">
            <div class="task-add">
              <a href=""><i class="fa-solid fa-circle-plus"></i> Agregar Tarea</a>
            </div>
          </div>
      </div>
    </div>   
  </div>
`


