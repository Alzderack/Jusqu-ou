const app = document.getElementById("app");

document.getElementById("startButton").addEventListener("click", showWheel);

function showWheel(){

    app.classList.add("fadeOut");

    setTimeout(()=>{

        app.innerHTML=`

            <img src="assets/logo.png" id="logo">

            <h1 class="fadeIn">
                Faites tourner la roue
            </h1>

            <p class="subtitle fadeIn">

                Une seule récompense peut être obtenue.

            </p>

            <div id="wheelContainer">

                <div id="wheel">

                    <div class="slice s1">🃏 Carte</div>
                    <div class="slice s2">💎 Booster</div>
                    <div class="slice s3">📜 Extension</div>
                    <div class="slice s4">👑 Titre</div>
                    <div class="slice s5">🎨 Fond</div>
                    <div class="slice s6 mystery">❓ Mystère</div>

                </div>

                <div id="pointer"></div>

            </div>

            <button id="spinButton">

                Lancer la roue

            </button>

        `;

        app.classList.remove("fadeOut");

        document
            .getElementById("spinButton")
            .addEventListener("click",spinWheel);

    },500);

}

let spinning=false;

function spinWheel(){

    if(spinning) return;

    spinning=true;

    const wheel=document.getElementById("wheel");

    wheel.style.transition="transform 5s cubic-bezier(.15,.9,.15,1)";

    wheel.style.transform="rotate(1710deg)";

    setTimeout(showMysteryCard,5200);

}

function showMysteryCard(){

    app.classList.add("fadeOut");

    setTimeout(()=>{

        app.innerHTML=`

            <img src="assets/logo.png" id="logo">

            <div id="card">

                <div id="cardInner">

                    <div class="cardFace cardBack">

                        <h2>🃏</h2>

                        <p>CARTE MYSTÈRE</p>

                    </div>

                    <div class="cardFace cardFront">

                        <h2>❤️</h2>

                        <h1>DEVENIR</h1>

                        <h1>MAMIE</h1>

                        <p>

                            La plus belle des aventures
                            vous attend.

                        </p>

                    </div>

                </div>

            </div>

            <button id="flipButton">

                Retourner la carte

            </button>

        `;

        app.classList.remove("fadeOut");

        document
            .getElementById("flipButton")
            .onclick=flipCard;

    },500);

}

function flipCard(){

    document
        .getElementById("cardInner")
        .classList.add("flip");

    document
        .getElementById("flipButton")
        .remove();

    setTimeout(()=>{

        const img=document.createElement("img");

        img.src="assets/echographie.jpg";

        img.id="echo";

        document
            .getElementById("app")
            .appendChild(img);

    },1200);

}
#wheelContainer{

    position:relative;

    width:300px;
    height:300px;

    margin:40px 0;

}

#wheel{

    width:100%;
    height:100%;

    border-radius:50%;

    background:conic-gradient(

    #ffd54f 0deg 60deg,
    #f5c542 60deg 120deg,
    #ffe082 120deg 180deg,
    #ffca28 180deg 240deg,
    #ffd54f 240deg 300deg,
    #fbc02d 300deg 360deg

    );

    border:8px solid white;

    position:relative;

    overflow:hidden;

    box-shadow:0 0 40px rgba(255,215,0,.3);

}

.slice{

    position:absolute;

    width:120px;

    text-align:center;

    left:90px;

    top:20px;

    transform-origin:60px 130px;

    font-weight:bold;

    font-size:15px;

}

.s2{transform:rotate(60deg);}
.s3{transform:rotate(120deg);}
.s4{transform:rotate(180deg);}
.s5{transform:rotate(240deg);}
.s6{transform:rotate(300deg);}

#pointer{

    position:absolute;

    top:-15px;
    left:50%;

    transform:translateX(-50%);

    width:0;
    height:0;

    border-left:18px solid transparent;
    border-right:18px solid transparent;
    border-top:35px solid white;

}

#card{

    perspective:1000px;

    margin:40px auto;

}

#cardInner{

    width:260px;
    height:380px;

    margin:auto;

    position:relative;

    transform-style:preserve-3d;

    transition:1s;

}

.flip{

    transform:rotateY(180deg);

}

.cardFace{

    position:absolute;

    width:100%;
    height:100%;

    border-radius:20px;

    backface-visibility:hidden;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    padding:25px;

    box-shadow:0 20px 40px rgba(0,0,0,.35);

}

.cardBack{

    background:#223557;

}

.cardFront{

    background:linear-gradient(#fff6d4,#f4d57b);

    color:#222;

    transform:rotateY(180deg);

}

#echo{

    width:260px;

    border-radius:15px;

    margin-top:30px;

    animation:fadeIn .8s;

}
