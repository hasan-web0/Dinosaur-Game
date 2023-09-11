const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if(dispatchEvent.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
        dino.classList.remove("jump");
        },300)
    }
}

let checkAlive = setInterval(function(){
    let topDino = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cacLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cacLeft > 0 && cacLeft < 70 && topDino >= 143)
    {
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("Whoops! Game Over :")
        window.location.reload();
    }
}, 10);

document.addEventListener("keydown" , function(_event){
    jump();
} );