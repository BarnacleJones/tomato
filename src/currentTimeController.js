import {lightFormat} from "date-fns"
//current time display controller

function currentTimeTicking(){
    let currentTime = document.getElementById("currentTime");
    let now = new Date();
    currentTime.innerText = lightFormat(now, "HH:mm:ss:a");
}

function constantDisplay() {setInterval(currentTimeTicking, 1000);}

export {constantDisplay}


