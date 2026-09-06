function showSurprise() {

``
const surprise =
    document.getElementById("surprise-message");

    document.getElementById("bg-music").play();

surprise.style.display = "block";

surprise.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

createHeartBurst();


}

function createHeart() {

``
const heart =
    document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
    Math.random() * 100 + "vw";

heart.style.fontSize =
    Math.random() * 25 + 15 + "px";

heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";

document.body.appendChild(heart);

setTimeout(() => {

    heart.remove();

}, 10000);
``

}

setInterval(createHeart, 700);

function createHeartBurst() {

``
for (let i = 0; i < 30; i++) {

    setTimeout(() => {

        createHeart();

    }, i * 100);

}


}

/* 3D Mouse Effect */

const cards =
document.querySelectorAll(
".photo-card, .love-card"
);

cards.forEach(card => {


card.addEventListener(
    "mousemove",
    (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            -(y - centerY) / 12;

        const rotateY =
            (x - centerX) / 12;

        card.style.transform =
            `rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;
    }
);


card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
            "rotateX(0) rotateY(0) scale(1)";
    }
);
``

});
