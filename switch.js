const startBtn = document.querySelector('[data-action="start"]');
const stoptBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const TIME = 1000;
let intervalId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 
startBtn.addEventListener('click', StartBackgroundBody);
stoptBtn.addEventListener('click', stopBackgroundBody);

function StartBackgroundBody() {
  if (isActive) {
    return;
  }
  intervalId = setInterval(backgroundBody, TIME, colors);
}

function stopBackgroundBody() {
  clearInterval(intervalId);
  isActive = false;
}

function backgroundBody(colors) {
  const colorId = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = `${colors[colorId]}`;
  isActive = true;
}