import { constantDisplay } from "./currentTimeController";
import { tomatoTimer, stop, restart } from "./tomatoTimerController";


//display the current time on the page
constantDisplay();

document.getElementById("startButton").addEventListener("click", tomatoTimer)
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", restart);