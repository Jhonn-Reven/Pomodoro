export function setupReloj(element){

    const $ = (d) => document.querySelector(d);

    function createDonutReloj(){
        let donut = document.createElement('div');
        donut.classList.add('donut','neumorphism-donut');
        let donutInterior = document.createElement('div');
        donutInterior.classList.add('donut-interior','neumorphism-donut-i');
        donutInterior.innerHTML = /*html */`
        <!-- <audio autoplay>
            <source src="public/sound/text-message.mp3" type="audio/mp3">
                Tu navegador no soporta audio HTML5.
        </audio> -->
            <p>Personalizado</p>
            <span class="tiempo "><time id="tiempo">00:00</time></span>
            <p>Tarea 1</p>
        `;
        let lineCircular  = document.createElement('div');
        lineCircular.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="280" height="280">
                <defs>
                <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
                </defs>
                <circle id="circle" cx="140" cy="140" r="132" stroke-linecap="round" />
            </svg>
        `;
        donut.append(donutInterior,lineCircular);

        return donut;
    }
    
    element.append(createDonutReloj())
    

}

export function cronometro(m,s){
    const $ = (d) => document.querySelector(d);

    const cronometro = $("#tiempo");
    const circle = $("#circle");
    let cont = 0;
    let min = m;
    let seg = s;

    const audio = new Audio('public/sound/text-message.mp3')

    cronometro.innerHTML= 
    ((min>=10)?min:'0'+min)+':' +
    ((seg>=10)?seg:'0'+seg);

    cont = (min*60 + seg);

    circle.style.animation=`progress-circle ${cont}s forwards`

    const t = setInterval(()=>{
        if(cont===0){
            circle.style.animation=``
            clearInterval(t);
            audio.play()
        }else{
            if(seg===0 ){
                min--
                seg = 60;
            }
            seg--;
            cont--;
            cronometro.innerHTML= 
            ((min>=10)?min:'0'+min)+':' +
            ((seg>=10)?seg:'0'+seg);
            console.log(cont)
        }
        //cont--
    }, 1000)


}


export function setupRelojTime(element){
    
    element.innerHTML =/*html */`
          <button class="btn-estado neumorphic--pressed time-active"  >Pomodoro</button>
          <button class="btn-estado neumorphic" >Descanso</button>
          <button class="btn-estado neumorphic">Descanso Largo</button>
    `
}



