

var audio1 = document.getElementById("audio1");
myMinute = document.getElementById("minutes");

function playAudio(){
    audio1.play()
}

var myInterval = "";


function startInterval() {
    if(myMinute.value != 0 && myMinute.value != ""){
        myInterval = setInterval(playAudio, (myMinute.value * 1000));
        myMinute.value = "";
    }
}

function stopInterval() {
    audio1.pause();
     clearInterval(myInterval)
     myMinute.value = "";
}