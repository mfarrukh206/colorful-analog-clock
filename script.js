const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(hourHand, hoursRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
  element.style.transform = `translate(-50%) rotate(${rotationRatio * 360}deg)`;
}

setInterval(setClock, 1000);
setClock();