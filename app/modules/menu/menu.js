export function setupMenu(element){
    element.innerHTML= /*html */`
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
    
    `
}
