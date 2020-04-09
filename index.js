const audioElement = new Audio('./audio/audio2.mp3');

window.onload = () => {
    document.querySelector("#start-button").addEventListener("click", () => {
        audioElement.play();
        document.querySelector(".game-intro").classList.toggle("hidden")
        document.querySelector("#myCanvas").classList.toggle("hidden")
        game.init();
    })

};
