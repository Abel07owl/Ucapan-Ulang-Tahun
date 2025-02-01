function nextPage() {
    document.getElementById("page1").classList.add("hidden");
    setTimeout(() => {
        document.getElementById("page2").classList.remove("hidden");
        startConfetti();
    }, 1000);
}

// Efek Konfeti Berjatuhan
function startConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
}
