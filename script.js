const bouton = document.getElementById("recompense");
const contenu = document.getElementById("contenu");

bouton.addEventListener("click", function () {

    contenu.innerHTML = `

        <h2>🔓 Récompense débloquée</h2>

        <div id="coffre">📦</div>

        <p id="texte">Ouverture du coffre...</p>

    `;

    setTimeout(() => {

        document.getElementById("coffre").innerHTML = "💰";

        document.getElementById("texte").innerHTML =
        "<h2>Le véritable trésor...</h2>";

    },3000);

    setTimeout(() => {

        contenu.innerHTML = `

        <h1>👶</h1>

        <h2>Le véritable trésor</h2>

        <p>n'était pas dans le donjon.</p>

        <h2>Bébé KRET</h2>

        <p>Arrivée prévue en janvier 2027 ❤️</p>

        `;

    },6000);

});
