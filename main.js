
function updateClock() {
  const clockElement = document.getElementById("clock");
  const uzbekistanTime = new Date().toLocaleTimeString("uz-UZ", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  clockElement.textContent = ` ${uzbekistanTime}`;
}
setInterval(updateClock, 1000);
updateClock();

