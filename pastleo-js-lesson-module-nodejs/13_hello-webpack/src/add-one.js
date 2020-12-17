import Typed from 'typed.js';

import { timeoutPromise, removeGreeting } from './utils.js';

export const addOne = async ms => {
    const timeDiv = document.createElement('div');
    const textSpan = document.createElement('span');

    const loadingTyped = new Typed(textSpan, {
        strings: ['Loading...'],
        typeSpeed: 60
    });

    timeDiv.appendChild(textSpan);
    document.getElementById('container').appendChild(timeDiv);

    await timeoutPromise(ms);
    loadingTyped.destroy();
    //  顯示完刪除

    const dateTyped = new Typed(textSpan, {
        strings: ['Completed!', (new Date()).toString()],
        typeSpeed: 30,
        onComplete: () => {
            // 完成後移除游標
            dateTyped.cursor.remove();
        }
    })
}

const mountAddOne = () => {
    document.getElementById('add-one').addEventListener('click', () => {
        removeGreeting()
        addOne(Math.random() * 1000);
    })
}

export default mountAddOne;