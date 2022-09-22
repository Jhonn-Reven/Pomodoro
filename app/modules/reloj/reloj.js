export function setupReloj(element){
element.innerHTML =/*html */`
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
`}


export function setupRelojTime(element){
    element.innerHTML =/*html */`
         <button class="neumorphic--pressed time-active"  >Pomodoro</button>
          <button class="neumorphic" >Descanso</button>
          <button  class="neumorphic">Descanso Largo</button>
    `
}



