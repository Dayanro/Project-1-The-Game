window.onload = () => {
    document.querySelector("#start-button").addEventListener("click", () => {
        document.querySelector(".game-intro").classList.toggle("hidden")
        document.querySelector("#myCanvas").classList.toggle("hidden")
        game.init();
    })

};
