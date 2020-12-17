import { timeoutPromise } from './utilus.js'


const addOne = async(time) => {
    const timeDiv = document.createElement('div');
    timeDiv.textContent = 'Loading...';
    document.getElementById('container').appendChild(timeDiv);

    await timeoutPromise(time);

    timeDiv.textContent = (new Date()).toString();
}

export default addOne;