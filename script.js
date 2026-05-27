// script.js

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {

  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 300) - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

});

yesBtn.addEventListener("click", () => {

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  document.querySelector(".card").innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
    style="width:100px;margin-bottom:20px;">

    <h1>Yayyyy 💖</h1>

    <p>See you on our date 🌸✨</p>
  `;

});
