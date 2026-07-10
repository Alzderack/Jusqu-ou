const bouton = document.getElementById("recompense");
const contenu = document.getElementById("contenu");

function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

bouton.addEventListener("click", async () => {

    contenu.innerHTML = `
        <h2>📡 Analyse du QR Code...</h2>

        <p id="etat">Connexion au serveur...</p>

        <progress id="barre" max="100" value="0"></progress>

        <p id="pourcentage">0 %</p>
    `;

    const barre = document.getElementById("barre");
    const pourcentage = document.getElementById("pourcentage");
    const etat = document.getElementById("etat");

    for (let i = 0; i <= 100; i++) {
        barre.value = i;
        pourcentage.innerText = i + " %";
        await attendre(35);
    }

    etat.innerHTML = `
        ✅ Carte authentifiée<br>
        ✅ Partie terminée<br>
        ✅ Récompense disponible
    `;

    await attendre(2000);

    contenu.innerHTML = `
        <h2>🎁 Récompense détectée</h2>

        <p>Une récompense exclusive est disponible.</p>

        <button id="ouvrir">🗝 Ouvrir le coffre</button>
    `;

    document.getElementById("ouvrir").onclick = ouvrirCoffre;

});

async function ouvrirCoffre() {

    contenu.innerHTML = `
        <h2>Ouverture du coffre...</h2>

        <div id="coffre" style="font-size:120px">📦</div>

        <p id="texte">Déverrouillage...</p>
    `;

    await attendre(2000);

    document.getElementById("coffre").innerHTML = "💰";
    document.getElementById("texte").innerHTML = "Trésor découvert.";

    await attendre(2000);

    contenu.innerHTML = `
        <h2>📥 Téléchargement de l'extension</h2>

        <p id="info">Préparation...</p>

        <progress id="telechargement" max="100" value="0"></progress>

        <p id="detail"></p>
    `;

    const barre = document.getElementById("telechargement");
    const detail = document.getElementById("detail");
    const info = document.getElementById("info");

    for (let i = 0; i <= 100; i++) {

        barre.value = i;

        if (i === 15)
            detail.innerHTML = "✔ 12 nouvelles cartes";

        if (i === 35)
            detail.innerHTML += "<br>✔ 2 nouveaux dangers";

        if (i === 55)
            detail.innerHTML += "<br>✔ 1 nouveau trésor";

        if (i === 72)
            detail.innerHTML += "<br><br><b>Poids :</b> 3,2 kg";

        if (i === 82)
            detail.innerHTML += "<br><b>Classe :</b> Papa";

        if (i === 90)
            detail.innerHTML += "<br><b>Classe :</b> Maman";

        await attendre(40);
    }

    info.innerHTML = "Erreur...";

    await attendre(1800);

    contenu.innerHTML = `
        <h2>⚠ Une erreur est survenue</h2>

        <p>Recherche d'une autre récompense...</p>
    `;

    await attendre(3000);

    contenu.innerHTML = `
        <h1 style="font-size:80px;">👶</h1>

        <h2>Le plus grand trésor...</h2>

        <p>n'était pas caché dans le donjon.</p>

        <br>

        <h1>Bébé KRET</h1>

        <h2>Arrivée prévue en janvier 2027 ❤️</h2>

        <p>Merci de partager cette aventure avec nous.</p>
    `;

}
