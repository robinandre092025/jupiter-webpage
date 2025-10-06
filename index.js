const shootingStar = document.querySelector(".shooting-star");
const explosion = document.querySelector(".explosion");
const hubble = document.querySelector("#hubble");

function playComet() {
    shootingStar.classList.remove("animate");
    explosion.classList.remove("animate");

    // brukte copilot for å finne denne løsningen VVV
    // "force reflow so the browser treats the subsequent add as a fresh animation"
    void document.body.offsetWidth;

    shootingStar.classList.add("animate");
    explosion.classList.add("animate");

    shootingStar.addEventListener("animationend", () =>
        shootingStar.classList.remove("animate"),
        {once: true}
    );

    explosion.addEventListener("animationend", () =>
        explosion.classList.remove("animate"),
        {once: true}
    );
}

hubble.addEventListener("click", () => {
        console.log("Hubble clicked");
        playComet();
    });