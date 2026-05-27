function showPage(pageNumber){

  document.querySelectorAll('.page').forEach((page)=>{

    page.classList.remove('active');

  });

  document
    .getElementById(`page${pageNumber}`)
    .classList.add('active');

}

/* MOVING NO BUTTON */

const noBtn =
document.getElementById('noBtn');

noBtn.addEventListener('mouseover',()=>{

  const x =
  Math.random() * 300 - 150;

  const y =
  Math.random() * 300 - 150;

  noBtn.style.transform =
  `translate(${x}px, ${y}px)`;

});

/* DATE TYPE SELECT */

const foods =
document.querySelectorAll('.food');

foods.forEach((food)=>{

  food.addEventListener('click',()=>{

    foods.forEach((f)=>{

      f.classList.remove('active-food');

    });

    food.classList.add('active-food');

  });

});

/* SEND WHATSAPP */

function sendWhatsApp(){

  const date =
  document.getElementById('dateInput').value;

  const time =
  document.getElementById('timeInput').value;

  const location =
  document.getElementById('locationInput').value;

  const selectedDateType =
  document.querySelector('.active-food span')
  .innerText;

  const message =
`💖 NEW DATE REQUEST 💖

✨ Date Type: ${selectedDateType}

📅 Date: ${date}

⏰ Time: ${time}

📍 Location: ${location}`;

  const phoneNumber =
  "919064560840";

  const whatsappURL =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappURL,
    '_blank'
  );

}
