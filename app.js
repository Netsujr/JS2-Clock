

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutesDeg = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hoursDeg = ((hours % 12 / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
