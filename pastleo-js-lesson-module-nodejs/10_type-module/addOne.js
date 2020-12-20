import { timeoutPromise } from './utilus.js'
// 跟utilus要timeout fn

const addOne = async(time) => {
    const timeDiv = document.createElement('div');
    // 宣告後才找得到
    timeDiv.textContent = 'Loading...';
    document.getElementById('container').appendChild(timeDiv);

    await timeoutPromise(time);

    timeDiv.textContent = (new Date()).toString();
}

export default addOne;
// 預設讓引入的拿