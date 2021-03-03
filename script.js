const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// const sounds1 = document.querySelectorAll("audio");
// console.log(sounds1);

sounds.forEach(sound =>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
   

    document.getElementById("buttons").appendChild(btn);

    btn.addEventListener("click", ()=>{
        stopSound();
        document.getElementById(sound).play();
    })
})

function stopSound(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}