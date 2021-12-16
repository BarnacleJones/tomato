import {addMinutes, lightFormat, addSeconds} from "date-fns"


//countdown timer

//this time
let now = new Date();

//25 min times
let twentyFiveMinutes = addSeconds(now, 10);
//have changed to seconds for testing
let distance25 = twentyFiveMinutes-now;

//10 min times
let tenMinutes = addMinutes(now, 10);
let distance10 = tenMinutes-now;

//5 min times
let fiveMinutes = addSeconds(now, 5);
//have change to seconds for testing
let distance5 = fiveMinutes-now;

//alarm sound
let sound = document.getElementById("sound");


//25 minute timer
function timer(distanceInterval, interval2)
{ setInterval(function (){
    var timeLeft = document.getElementById("timeLeft");
    timeLeft.innerText = lightFormat(distanceInterval, "mm:ss");
    distanceInterval = distanceInterval-1000;},1000)
    if (distanceInterval <=0) {
        clearInterval(interval());
        sound.play();
        timeLeft.innerText = "00:00";
        interval = interval2-now;
    }
    }



//counter for tomato timer
var counter = 0;
function tomatoTimer(){
    switch (counter) {
        case 0:
            timer(distance25, twentyFiveMinutes)
            counter++;
            break;
        case 1:
            timer(fiveMinutes, distance5)
            counter++
            break;
        case 2: 
        
            counter++;
            break;
        case 3: 
        
            counter++
            break;
        case 4:   
        
            counter++;
            break;
        case 5:
            
            counter++
            break;
        case 6:
            
            counter++
        case 7:
            timer(tenMinutes, distance10)
            counter = 0;
        default:
            alert("Something broke!");
            break;
    }
}


function stop() {sound.pause(); sound.currentTime = 0;}

function restart(){location.reload()}


export {tomatoTimer, stop, restart}