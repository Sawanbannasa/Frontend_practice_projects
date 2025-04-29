var timer = 10;
var score = 0;
var hitrn = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;    
}
function makeBubble() {
    var clutter = "";

for (let i = 1; i <201; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
    
}
document.querySelector("#pbtm").innerHTML = clutter;    
}
function runTimer(){


    var timerint = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            alert(`Your Score is ${score}`);
            document.querySelector("#pbtm").innerHTML =`<h1>Time's Up</h1>`;
        }
},1000);
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
 
runTimer();
makeBubble();
getNewHit();