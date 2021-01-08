const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");


const timerContainer = document.querySelector("main");

const time = () => {
  let now = new Date();
  hour.textContent =
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  minutes.textContent =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  seconds.textContent =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
};

time();
setInterval(time, 1000);

timerContainer.addEventListener("click", () => {
  timerContainer.classList.toggle("zoomIn");

});
