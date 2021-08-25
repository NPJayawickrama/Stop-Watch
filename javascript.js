window.onload = function(){
    var seconds = 00;
    var tens = 00;

    var sumTens = document.getElementById("tens")
    var sumSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById("Start")
    var buttonStop = document.getElementById("Stop")
    var buttonReset = document.getElementById("Reset")
    var buttonLap = document.getElementById("Lap")
    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        sumSeconds.innerHTML = tens;
        sumTens.innerHTML = seconds;
    }

    function startTimer(){
        tens++;
        
        if (tens <= 9){
            sumTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            sumTens.innerHTML = tens;
        }
        if (tens > 99){
            seconds++;
            sumSeconds.innerHTML = "0" + seconds;
        }
        if (seconds>9){
            sumSeconds.innerHTML = seconds;
        }
    }


}