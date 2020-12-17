import { timeoutPromise, removeGreeting } from './utils.js';

export const addOne = async ms => {
  const timeDiv = document.createElement('div');
  const textSpan = document.createElement('span');

  textSpan.textContent = 'Loading...';

  timeDiv.appendChild(textSpan);
  document.getElementById('container').appendChild(timeDiv);

  await timeoutPromise(ms);

  textSpan.textContent = (new Date()).toString();
}

const mountAddOne = () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreeting()
    addOne(Math.random() * 1000);
  })
}

export default mountAddOne;
