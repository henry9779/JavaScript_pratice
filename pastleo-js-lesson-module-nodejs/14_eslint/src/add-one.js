import Typed from 'typed.js';

import { timeoutPromise, removeGreeting } from './utils.js';

export const addOne = async ms => {
  const timeDiv = document.createElement('div');
  const textSpan = document.createElement('span');

  timeDiv.appendChild(textSpan);
  document.getElementById('container').appendChild(timeDiv);

  const loadingTyped = new Typed(textSpan, {
    strings: ['Loading...'],
  });

  await timeoutPromise(ms);

  loadingTyped.destroy();

  const completedTyped = new Typed(textSpan, {
    strings: ['Completed!', (new Date()).toString()],
    typeSpeed: 30,
    onComplete: () => {
      completedTyped.cursor.remove();
    }
  });
}

const mountAddOne = () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreeting()
    addOne(Math.random() * 1000);
  })
}

export default mountAddOne;
