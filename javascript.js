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
    var x = 0;
    var lapcount = 0;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval=setInterval(startTimer, 10);
        localStorage.clickcount = 0;
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
        document.getElementById("lapSeconds1").innerHTML = "00";
        document.getElementById("lapTens1").innerHTML = "00";
        document.getElementById("lapSeconds2").innerHTML = "00";
        document.getElementById("lapTens2").innerHTML = "00";
        document.getElementById("lapSeconds3").innerHTML = "00";
        document.getElementById("lapTens3").innerHTML = "00";
        document.getElementById("lapSeconds4").innerHTML = "00";
        document.getElementById("lapTens4").innerHTML = "00";
        document.getElementById("lapSeconds5").innerHTML = "00";
        document.getElementById("lapTens5").innerHTML = "00";
        lapcount = 0;
    }

    buttonLap.onclick = function(){
        lapcount++;
        if (lapcount == 1){
            document.getElementById("lapSeconds1").innerHTML = seconds;
            document.getElementById("lapTens1").innerHTML = tens;  
        }
        if (lapcount == 2){
            document.getElementById("lapSeconds2").innerHTML = seconds;
            document.getElementById("lapTens2").innerHTML = tens;
        }
        if (lapcount == 3){
            document.getElementById("lapSeconds3").innerHTML = seconds;
            document.getElementById("lapTens3").innerHTML = tens;
        }
        if (lapcount == 4){
            document.getElementById("lapSeconds4").innerHTML = seconds;
            document.getElementById("lapTens4").innerHTML = tens;
        }
        if (lapcount == 5){
            document.getElementById("lapSeconds5").innerHTML = seconds;
            document.getElementById("lapTens5").innerHTML = tens;
        }
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