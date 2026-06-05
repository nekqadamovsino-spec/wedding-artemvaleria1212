const target = new Date("2026-12-12T15:30:00+07:00");

function pad(n){ return String(n).padStart(2, "0"); }

function updateCountdown(){
  let diff = target - new Date();

  if(diff <= 0){
    document.querySelector(".timer").innerHTML =
      '<div style="grid-column:1 / -1"><b>♡</b><span>мы женимся сегодня</span></div>';
    return;
  }

  document.getElementById("days").textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent = pad(Math.floor((diff / (1000 * 60 * 60)) % 24));
  document.getElementById("minutes").textContent = pad(Math.floor((diff / (1000 * 60)) % 60));
  document.getElementById("seconds").textContent = pad(Math.floor((diff / 1000) % 60));
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const answer = document.querySelector('input[name="answer"]:checked')?.value || "";
  const drinks = [...document.querySelectorAll('input[name="drink"]:checked')].map(i => i.value).join(", ");
  const comment = document.getElementById("comment").value.trim();

  document.getElementById("formResult").textContent = name + ", спасибо! Ваш ответ принят.";
  this.reset();

  // Для Google Таблицы сюда можно добавить WEB_APP_URL.
});
