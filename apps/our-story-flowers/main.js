onload = () => {
  document.body.classList.remove("container");

  // Timer - cuenta desde el 23 de junio de 2026 a las 11:30 PM
  var startDate = new Date(2026, 5, 23, 23, 30, 0); // Junio 23, 2025, 11:30 PM

  function updateTimer() {
    var now = new Date();
    var diff = now - startDate;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
};
