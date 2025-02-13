let ms=0,s=0,m=0

var timer

var display=document.querySelector('.watch')
var laps=document.querySelector('.laps')

function start(){
     if(!timer){
        timer=setInterval(run,10)
     }
}
function run(){
    ms++
    if(ms==100){
        s++;
        ms=0
    }
    if(s==60){
        m++
        s=0
    }
    display.innerHTML=gettime()
}
function gettime(){
    return (m<10 ? "0"+m : m)+ ":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms)
}

function pause(){
    stop()
}

function stop(){
    clearInterval(timer)
    timer = false
}

function reset(){
    ms=0
    s=0
    m=0;
    display.innerHTML=gettime()
    stop()
}

function lap(){
    let a=document.createElement("div")
    a.innerText=gettime()
    laps.append(a)
}
function restart(){
    laps.innerHTML=""
    reset()
}
