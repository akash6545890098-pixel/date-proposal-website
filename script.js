function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.remove('active');
  });

  document.getElementById(`page${pageNumber}`).classList.add('active');
}

const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

const foods = document.querySelectorAll('.food');

foods.forEach((food) => {
  food.addEventListener('click', () => {
    foods.forEach((f) => f.classList.remove('active-food'));
    food.classList.add('active-food');
    function sendWhatsApp() {

  const selectedFood =
    document.querySelector('.active-food span').innerText;

  const date =
    document.querySelector('input[type=\"date\"]').value;

  const time =
    document.querySelector('input[type=\"time\"]').value;

  const address =
    document.querySelector('textarea').value;

  const message =
`💖 Date Confirmed 💖

🍴 Food: ${selectedFood}

📅 Date: ${date}

⏰ Time: ${time}

📍 Address: ${address}`;

  const phoneNumber = "919064560840";

  const whatsappURL =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
    }
  });
});
