import {addMinutes, lightFormat} from "date-fns";

//countdown timer area
var timeLeft = document.getElementById("timeLeft");

//this time
let now = new Date();

//25 min times
let twentyFiveMinutes = addMinutes(now, 25);
//have changed to seconds for testing
let distance25 = twentyFiveMinutes-now;

//10 min times
let tenMinutes = addMinutes(now, 10);
let distance10 = tenMinutes-now;

//5 min times
let fiveMinutes = addMinutes(now, 5);
//have change to seconds for testing
let distance5 = fiveMinutes-now;

//alarm sound
let sound = document.getElementById("sound");

//timer function
function timer(distanceInterval)
{ 
    const intervalTimer = setInterval(displayTime,1000);
    function stopCountdown(){clearInterval(intervalTimer);}    
    sound.pause();
    function displayTime (){    
        if (distanceInterval <=0) {
            sound.play();
            timeLeft.innerText = "00:00";
            stopCountdown();
        }
        else{
            timeLeft.innerText = lightFormat(distanceInterval, "mm:ss");
            distanceInterval = distanceInterval-1000;
        }
    }
}

//function to stop/restart timer
function stop() {location.reload();}


//attach these functions to buttons on HTML
function initialiseEvents(){
    document.addEventListener("click", (e) => {
        const target = e.target.id;
        if (target === "startButton25") timer(distance25);
        else if (target === "startButton5") timer(distance5);
        else if (target === "startButton10") timer(distance10);
        else if (target === "stop") stop(); 
        else if (target === "instruction") {document.getElementById("instructionsArea").style.display = "inherit"; document.getElementById("container").style.display = "none";}   
        else if (target === "close") {document.getElementById("instructionsArea").style.display = "none"; document.getElementById("container").style.display = "";}   
    })
}

export {initialiseEvents}