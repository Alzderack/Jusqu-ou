// ===========================
// Éléments
// ===========================

const welcome = document.getElementById("welcome");
const wheelScreen = document.getElementById("wheelScreen");
const cardScreen = document.getElementById("cardScreen");

const startButton = document.getElementById("startButton");

const wheel = document.getElementById("wheel");
const wheelText = document.getElementById("wheelText");

const card = document.getElementById("card");

let started = false;

// ===========================
// Démarrage
// ===========================

startButton.addEventListener("click", () => {

    if (started) return;

    started = true;

    if (navigator.vibrate) {
        navigator.vibrate(40);
    }

    welcome.classList.remove("active");

    setTimeout(() => {

        wheelScreen.classList.add("active");

        lancerRoue();

    }, 500);

});

// ===========================
// Roue
// ===========================

function lancerRoue() {

    wheelText.textContent = "Recherche de votre récompense...";

    const tours = 360 * 7;
    const angleFinal = tours + 315;

    wheel.style.transition =
        "transform 4.8s cubic-bezier(.18,.95,.15,1)";

    wheel.style.transform = `rotate(${angleFinal}deg)`;

    setTimeout(finRoue, 4900);

}

// ===========================
// Fin de la roue
// ===========================

function finRoue() {

    wheelText.textContent = "Carte Mystère !";

    if (navigator.vibrate) {
        navigator.vibrate([80, 50, 80]);
    }

    setTimeout(() => {

        wheelScreen.classList.remove("active");

        cardScreen.classList.add("active");

        apparitionCarte();

    }, 800);

}

// ===========================
// Apparition de la carte
// ===========================

function apparitionCarte() {

    card.classList.add("visible");

}

// ===========================
// Retourner la carte
// ===========================

card.addEventListener("click", () => {

    if (card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    if (navigator.vibrate) {
        navigator.vibrate(120);
    }

});
