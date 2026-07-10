// ===========================
// Récupération des éléments
// ===========================

const welcome = document.getElementById("welcome");
const wheelScreen = document.getElementById("wheelScreen");
const cardScreen = document.getElementById("cardScreen");

const startButton = document.getElementById("startButton");

const wheel = document.getElementById("wheel");
const wheelText = document.getElementById("wheelText");

const card = document.getElementById("card");
const echo = document.getElementById("echo");

// Empêche plusieurs clics
let started = false;

// ===========================
// Bouton principal
// ===========================

startButton.addEventListener("click", () => {

    if(started) return;

    started = true;

    // vibration smartphone
    if(navigator.vibrate){
        navigator.vibrate(40);
    }

    welcome.classList.remove("active");

    setTimeout(() => {

        wheelScreen.classList.add("active");

        lancerRoue();

    },500);

});


// ===========================
// Animation roue
// ===========================

function lancerRoue(){

    wheelText.innerHTML="Recherche de votre récompense...";

    // environ 7 tours + arrêt précis
    const tours = 360*7;

    // Le pointeur est en haut.
    // On veut finir sur le secteur "Carte Mystère"
    // (on ajustera l'angle plus tard si besoin)

    const angleFinal = tours + 315;

    wheel.style.transition =
        "transform 4.8s cubic-bezier(.18,.95,.15,1)";

    wheel.style.transform =
        `rotate(${angleFinal}deg)`;

    setTimeout(finRoue,4900);

}


// ===========================
// Fin roue
// ===========================

function finRoue(){

    wheelText.innerHTML="Carte Mystère !";

    if(navigator.vibrate){
        navigator.vibrate([80,50,80]);
    }

    setTimeout(() => {

        wheelScreen.classList.remove("active");

        cardScreen.classList.add("active");

        apparitionCarte();

    },900);

}


// ===========================
// Apparition carte
// ===========================

function apparitionCarte(){

    card.style.opacity="0";
    card.style.transform="scale(.4)";

    requestAnimationFrame(()=>{

        card.style.transition="all .6s ease";

        card.style.opacity="1";

        card.style.transform="scale(1)";

    });

}


// ===========================
// Retourner la carte
// ===========================

card.addEventListener("click",()=>{

    if(card.classList.contains("flipped"))
        return;

    card.classList.add("flipped");

    if(navigator.vibrate){
        navigator.vibrate(120);
    }

    setTimeout(()=>{

        echo.classList.add("show");

    },900);

});
