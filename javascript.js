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
    var lap1 = document.getElementById("Lap1")
    var lap2 = document.getElementById("Lap2")
    var lap3 = document.getElementById("Lap3")
    var lap4 = document.getElementById("Lap4")
    var lap5 = document.getElementById("Lap5")

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval=setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        sumTens.innerHTML = tens;
        sumSeconds.innerHTML = seconds;
    }

    buttonLap.onclick = function(){
        
    }

    function lap(){

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
            console.log("seconds");
            seconds++;
            sumSeconds.innerHTML = "0" + seconds;
            tens = 0;
            sumTens.innerHTML = "0" + 0;
        }
        if (seconds>9){
            sumSeconds.innerHTML = seconds;
        }
    }


}